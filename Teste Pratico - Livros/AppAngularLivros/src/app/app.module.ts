import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LivrosService } from './livros.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { ModalModule}  from "ngx-bootstrap/modal";
import { LivrosComponent } from './components/livros/livros.component';


@NgModule({
  declarations: [LivrosComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,LivrosService],
  bootstrap: []
})
export class AppModule { }