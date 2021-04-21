import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './component/model/model.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderserviceService } from '../app/services/orderervice.service';
import { BurgersComponent } from './component/burgers/burgers.component';
import { SteakComponent } from './component/steak/steak.component';
import { SidesComponent } from './component/sides/sides.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModelComponent,
    BurgersComponent,
    SteakComponent,
    SidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [OrderserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
