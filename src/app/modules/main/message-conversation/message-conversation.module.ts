import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageConversationRoutingModule } from './message-conversation-routing.module';
import { MessageConversationComponent } from './message-conversation.component';


@NgModule({
  declarations: [
    MessageConversationComponent
  ],
  imports: [
    CommonModule,
    MessageConversationRoutingModule
  ]
})
export class MessageConversationModule { }
