import { Injectable } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root',
})
export class OrderserviceService {
  orders: Orders[];
  order: Orders = {
    burgerType: '',
    howMany: null,
    ketchup: null,
    mustard: null,
    lettuce: null,
    tomato: null,
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
  potato = false;

  constructor() {
    this.orders = [];
    this.showBurgersMenu = false;
    this.showSteakMenu = false;
    this.fries = false;
    this.salads = false;
    this.potato;
  }

  getShowBurgers() {
    this.showBurgersMenu = !this.showBurgersMenu;
    this.showSteakMenu = false;
    this.fries = false;
    this.salads = false;
    return (
      this.showSteakMenu,
      this.showBurgersMenu,
      this.fries,
      this.salads,
      this.potato
    );
  }

  getShowSteakMenu() {
    this.showSteakMenu = !this.showSteakMenu;
    this.showBurgersMenu = false;
    this.fries = false;
    this.salads = false;
    return (
      this.showSteakMenu,
      this.showBurgersMenu,
      this.fries,
      this.salads,
      this.potato
    );
  }

  // getShowPotato() {
  //     this.potato = !this.potato;
  //     this.salads = false;
  //     this.fries = false;
  //     return this.potato,
  // }

  // getShowSalad(){
  //     this.salads = !this.salads;
  //     this.potato = false;
  //     this.fries = false;
  //     return (
  //       this.salads,
  //       this.potato = false,
  //       this.fries = false,
  //     )
  // }

  getOrders() {
    console.log('service running ');
    return this.order;
  }
}
