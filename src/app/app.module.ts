import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import{ MatButtonModule} from '@angular/material/button';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';
import { TransfarComponent } from './transfar/transfar.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { TemplateComponent } from './template/template.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodolistComponent,
    ChildComponent,
    TransfarComponent,
    UsdInrPipe,
    TemplateComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
