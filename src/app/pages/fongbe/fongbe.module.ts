import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FongbeComponent } from './fongbe.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FongbePageRoutingModule } from './fongbe-routing.module';



@NgModule({
  declarations: [FongbeComponent],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    FongbePageRoutingModule,
  ],

})
export class FongbeModule { }
