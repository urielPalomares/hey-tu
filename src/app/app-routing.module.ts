import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'message', loadChildren: () => import('./modules/message/message.module').then(m => m.MessageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
