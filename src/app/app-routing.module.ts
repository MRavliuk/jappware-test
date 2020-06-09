import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './components/panel/panel.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: 'full' },
  { path: 'panel', component: PanelComponent },
  { path: 'addmember', component: AddMemberComponent },
  { path: 'members/:id', component: EditMemberComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
