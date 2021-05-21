import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular'; import { FongbeCharComponent } from '../fongbe-char/fongbe-char.component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, AfterViewInit {
  // clavier alphabétique
  specialChars = [
    { char: 'ɛ', variante: ['ɛ̀', 'ɛ́', 'ɛ̄', 'ɛ̌', 'ɛ̂'] },
    { char: 'ɔ', variante: ['ɔ̀', 'ɔ́', 'ɔ̄', 'ɔ̌', 'ɔ̂'] },
    { char: 'ɖ', variante: [] }
  ];
  secondLine = [
    {char: 'a', variante: ['à', 'á', 'â', 'ā', 'ǎ'] },
    {char: 'z', variante: [] },
    {char: 'e', variante: ['ê', 'è', 'é', 'ē', 'ě'] }, 
    {char: 'r', variante: [] }, 
    {char: 't', variante: [] }, 
    {char: 'y', variante: [] }, 
    {char: 'u', variante: ['ǔ', 'û', 'ù', 'ú', 'ū'] },
    {char: 'i', variante: ['ǐ', 'ī', 'î', 'ì', 'í'] },
    {char: 'o', variante: ['ǒ', 'ō', 'ô', 'ó', 'ò'] },
    {char: 'p', variante: [] },
  ];

  thirdLine =  ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];
  fourthLine =  ['w', 'x', 'c', 'v', 'b', 'n', '.'];

  // clavier numérique
  nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  numSymbols1 = ['@', '#', '$', '_', '&', '-', '+', '=', '(', ')'];
  // tslint:disable-next-line: quotemark
  numSymbols2 = ['*', '"', "'", ':', ';', '!', '?', '/'];
  isUpperCase = false;
  iskeyboardNumeric = false;
  @Output() letterTap = new EventEmitter();
  @Output() backspaceTap = new EventEmitter();
  @Output() specialCharTap = new EventEmitter();
  @Output() enterTap = new EventEmitter();

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

  enterClick(){
    this.enterTap.emit();
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
        this.secondLine = [
          {char: 'A', variante: ['À', 'Á', 'Â', 'Ā', 'Ǎ'] },
          {char: 'Z', variante: [] },
          {char: 'E', variante: ['Ê', 'È', 'É', 'Ē', 'Ě'] },
          {char: 'R', variante: [] }, 
          {char: 'T', variante: [] }, 
          {char: 'Y', variante: [] }, 
          {char: 'U', variante: ['Ǔ', 'Û', 'Ù', 'Ú', 'Ū'] },
          {char: 'I', variante: ['Ǐ', 'Ī', 'Î', 'Ì', 'Í'] },
          {char: 'O', variante: ['Ǒ', 'Ō', 'Ô', 'Ó', 'Ò'] },
          {char: 'P', variante: [] },
        ];
        this.thirdLine =  ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];
        this.fourthLine =  ['W', 'X', 'C', 'V', 'B', 'N', '.'];
        this.isUpperCase = true;
       } else {
        this.specialChars = [
          { char: 'ɛ', variante: ['ɛ̀', 'ɛ́', 'ɛ̄', 'ɛ̌', 'ɛ̂'] },
          { char: 'ɔ', variante: ['ɔ̀', 'ɔ́', 'ɔ̄', 'ɔ̌', 'ɔ̂'] },
          { char: 'ɖ', variante: [] }
        ];
        this.secondLine = [
          {char: 'a', variante: ['à', 'á', 'â', 'ā', 'ǎ'] },
          {char: 'z', variante: [] },
          {char: 'e', variante: ['ê', 'è', 'é', 'ē', 'ě'] }, 
          {char: 'r', variante: [] }, 
          {char: 't', variante: [] }, 
          {char: 'y', variante: [] }, 
          {char: 'u', variante: ['ǔ', 'û', 'ù', 'ú', 'ū'] },
          {char: 'i', variante: ['ǐ', 'ī', 'î', 'ì', 'í'] },
          {char: 'o', variante: ['ǒ', 'ō', 'ô', 'ó', 'ò'] },
          {char: 'p', variante: [] },
        ];
        this.thirdLine =  ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];
        this.fourthLine =  ['w', 'x', 'c', 'v', 'b', 'n', '.'];
        this.isUpperCase = false;
       }

  }

  changeKeyboard(){
    this.iskeyboardNumeric = !this.iskeyboardNumeric;
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
