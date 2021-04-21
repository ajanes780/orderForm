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
import { FriesComponent } from './component/fries/fries.component';
import { BakedpotatoComponent } from './component/bakedpotato/bakedpotato.component';
import { SaladComponent } from './component/salad/salad.component';
import { SpecialreqComponent } from './component/specialreq/specialreq.component';
import { PopupComponent } from './component/popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModelComponent,
    BurgersComponent,
    SteakComponent,
    FriesComponent,
    BakedpotatoComponent,
    SaladComponent,
    SpecialreqComponent,
    PopupComponent,
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
