import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ItemsListComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    LocalStorageModule,
    FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
