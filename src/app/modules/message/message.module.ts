import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageRoutingModule,

  ]
})
export class MessageModule { }
