import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'user',
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
    {
      path: 'groups',
      loadChildren: () =>
        import('./groups/groups.module').then((m) => m.GroupsModule),
    },
    {
      path: 'message',
      loadChildren: () =>
        import('./message-conversation/message-conversation.module').then((m) => m.MessageConversationModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
