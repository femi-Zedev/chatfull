import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonTextarea, ModalController, PopoverController } from '@ionic/angular';
import { FongbeCharComponent } from 'src/app/shared/fongbe-char/fongbe-char.component';
import { KeyboardComponent } from 'src/app/shared/keyboard/keyboard.component';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-fongbe',
  templateUrl: './fongbe.component.html',
  styleUrls: ['./fongbe.component.scss'],
})
export class FongbeComponent implements OnInit, AfterViewInit {
  fongbeInput = '';
  @Output() letterTapEvent = new EventEmitter();
  @Output() backspaceTapEvent = new EventEmitter();
  @ViewChild('testInput', {static: false}) testInput: IonTextarea;
  constructor(private modalCtrl: ModalController, public popoverController: PopoverController) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.letterTapEvent.subscribe( (letter) => {
      this.fongbeInput += letter;
      console.log(this.fongbeInput);
    });
    this.backspaceTapEvent.subscribe( (event) => {
      this.fongbeInput = this.fongbeInput.slice(0, -1);
    });
  }

  async openKeyboardModal(){
    const presentModel = await this.modalCtrl.create({
      component: KeyboardComponent,
      componentProps: {
        letterTap: this.letterTapEvent,
        backspaceTap: this.backspaceTapEvent
      },
      mode: 'ios',
      cssClass: 'keyboard-modal'
    });

    presentModel.onWillDismiss().then((data) => {
      console.log(data);
      // custom code
    });

    await presentModel.present();
    this.testInput.setFocus();
    this.dismissKeyboardModal();

  }

  dismissKeyboardModal(){
    this.modalCtrl.dismiss();
  }

  // async presentPopover( event: any ) {
  //   console.log(event);
  //   const popover = await this.popoverController.create({
  //     component: FongbeCharComponent,
  //     backdropDismiss: true,
  //     showBackdrop: true,
  //     event,
  //     animated: true,
  //     componentProps: {
  //       characters: ['c','h','a'],
  //     },
  //     mode: 'ios',
  //     keyboardClose: true,
  //     cssClass: 'char-popover',
  //   });
  //   await popover.present();

  // }

}
