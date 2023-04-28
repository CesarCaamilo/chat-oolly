import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageConversationComponent} from "./message-conversation.component";

const routes: Routes = [
  {
    path: '',
    component: MessageConversationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageConversationRoutingModule { }
