import { Injectable } from '@angular/core';
import { Orders } from '../models/Orders';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

/*
This is the data service for the app currently not using observables but can be wired up as needed. The service seems to okay for when there is only one user
*/
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

  //  this we can use if needed
  getOrderStatus(): Observable<any> {
    return of(this.orders);
  }

  // update and change helper functions
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
