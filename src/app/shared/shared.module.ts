import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LongPressModule } from 'ionic-long-press';
import { FongbeCharComponent } from './fongbe-char/fongbe-char.component';



@NgModule({
  declarations: [KeyboardComponent, FongbeCharComponent],
  entryComponents: [],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LongPressModule
  ],
  exports: [KeyboardComponent, FongbeCharComponent]
})
export class SharedModule {}
