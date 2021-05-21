import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular'; import { FongbeCharComponent } from '../fongbe-char/fongbe-char.component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, AfterViewInit {
  specialChars = [
    { char: 'ɛ', variante: ['ɛ̀', 'ɛ́', 'ɛ̄', 'ɛ̌', 'ɛ̂'] },
    { char: 'ɔ', variante: ['ɔ̀', 'ɔ́', 'ɔ̄', 'ɔ̌', 'ɔ̂'] },
    { char: 'ɖ', variante: [] }
  ];
  secondLine = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  thirdLine =  ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];
  fourthLine =  ['w', 'x', 'c', 'v', 'b', 'n', '.'];
  isUpperCase = false;
  @Output() letterTap = new EventEmitter();
  @Output() backspaceTap = new EventEmitter();
  @Output() specialCharTap = new EventEmitter();

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.specialCharTap.subscribe((letter) => {
      this.letterClick(letter);
      this.popoverController.dismiss();
    });
  }

  letterClick(letter){
    this.letterTap.emit(letter);
  }

  backspace(){
    this.backspaceTap.emit('');
  }


  charLongPressed(variante: []){
    if (variante.length > 0){
      this.presentPopover(variante);
    }
  }

  goUpperCase(){
      if (!this.isUpperCase) {
        this.specialChars = [
          { char: 'Ɛ', variante: ['Ɛ̀', 'Ɛ́', 'Ɛ̄', 'Ɛ̌', 'Ɛ̂'] },
          { char: 'Ɔ', variante: ['Ɔ́', 'Ɔ̀', 'Ɔ̂', '̂Ɔ̄', '̄Ɔ̌'] },
          { char: 'Ɖ', variante: [] }
        ];
        this.secondLine = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        this.thirdLine =  ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];
        this.fourthLine =  ['W', 'X', 'C', 'V', 'B', 'N', '.'];
        this.isUpperCase = true;
       } else {
        this.specialChars = [
          { char: 'ɛ', variante: ['ɛ̀', 'ɛ́', 'ɛ̄', 'ɛ̌', 'ɛ̂'] },
          { char: 'ɔ', variante: ['ɔ̀', 'ɔ́', 'ɔ̄', 'ɔ̌', 'ɔ̂'] },
          { char: 'ɖ', variante: [] }
        ];
        this.secondLine = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
        this.thirdLine =  ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];
        this.fourthLine =  ['w', 'x', 'c', 'v', 'b', 'n', '.'];
        this.isUpperCase = false;
       }

  }


  async presentPopover( chars ) {
    const popover = await this.popoverController.create({
      component: FongbeCharComponent,
      backdropDismiss: true,
      showBackdrop: false,
      componentProps: {
        characters: chars,
        charTap: this.specialCharTap
      },
      mode: 'ios',
      keyboardClose: true,
      cssClass: 'char-popover',
      translucent: false
    });
    await popover.present();

  }

}
