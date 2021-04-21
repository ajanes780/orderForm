import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './component/model/model.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrymeComponent } from './component/tryme/tryme.component';
@NgModule({
  declarations: [AppComponent, MenuComponent, ModelComponent, TrymeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
