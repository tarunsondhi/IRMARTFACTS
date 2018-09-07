import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { CrudService } from './services/crud.service';
import { UtilService } from './services/util.service';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from "./modal/modal.component";
import {ModalService} from "./services/modal.service";
import {AlertService} from "./services/alert.service";
import {AlertComponent} from "./alert/alert.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {TabViewModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    TabViewModule
  ],
  providers: [
    AuthGuard,
    CrudService,
    UtilService,
    ModalService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
