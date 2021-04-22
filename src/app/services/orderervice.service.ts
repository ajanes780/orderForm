import { Injectable } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { Orders } from '../models/Orders';
import { of } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OrderserviceService {
  orders: Orders[];
  data: Observable<any>;
  order: Orders = {
    burgerType: '',
    howMany: null,
    ketchup: false,
    mustard: false,
    lettuce: false,
    tomato: false,
    steakType: '',
    doneness: '',
    nameOfSide: '',
    amountOfSide: '',
    bakedPotatoInstructions: '',
    specialInstructions: '',
    dressingType: '',
    orderDate: '',
  };
  showBurgersMenu: boolean = false;
  showSteakMenu: boolean = false;
  fries: boolean = false;
  salads: boolean = false;
  potato: boolean = false;

  constructor() {
    this.orders = [];
    this.showBurgersMenu = false;
    this.showSteakMenu = false;
    this.fries = false;
    this.salads = false;
    this.potato = false;
  }

  // update and change
  getSaladStatus(): Observable<any> {
    return of(this.salads);
  }

  changeSaladStats() {
    console.log('here');
    this.salads = !this.salads;
    return this.salads;
  }

  getShowBurgers() {
    return this.showBurgersMenu;
  }

  changeBurgerStatus() {
    this.showBurgersMenu = !this.showBurgersMenu;
    return this.showBurgersMenu;
  }

  getShowSteakMenu() {
    return this.showSteakMenu;
  }

  changeSteakStatus() {
    this.showSteakMenu = !this.showSteakMenu;
    return this.showSteakMenu;
  }

  getOrders() {
    console.log('service running ');
    return this.order;
  }
}
