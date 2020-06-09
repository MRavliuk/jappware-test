import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SESSION_STORAGE } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';

import { MembersService } from './services/members.service';

import { PanelComponent } from './components/panel/panel.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { PanelItemComponent } from './components/panel-item/panel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    EditMemberComponent,
    NotFoundComponent,
    AddMemberComponent,
    PanelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
