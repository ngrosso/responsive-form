import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms' //importo los reactive forms

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
