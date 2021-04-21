import { Component, OnInit, ViewChild } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from '../../services/orderervice.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
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
  potato: boolean = false;
  orderNumber: any = { order: '' };
  @ViewChild('menuForm') form: any;

  constructor(private orderService: OrderserviceService) {
    this.getOrderNumber();
  }

  ngOnInit() {
    this.order = this.orderService.getOrders();
    this.showBurgersMenu = this.orderService.getShowBurgers();
  }

  getOrderNumber() {
    let number = Math.floor(Math.random() * 100 + 1);

    this.orderNumber = { order: number };
  }

  showBurgers() {
    this.showBurgersMenu = !this.showBurgersMenu;
    this.showSteakMenu = false;
    this.fries = false;
    this.salads = false;
  }

  showSteaks() {
    this.showSteakMenu = !this.showSteakMenu;
    this.showBurgersMenu = false;
    this.fries = false;
    this.salads = false;
  }

  showPotato() {
    this.potato = !this.potato;
    this.salads = false;
    this.fries = false;
  }

  showFries() {
    this.fries = !this.fries;
    this.salads = false;
    this.potato = false;
  }

  showSalads() {
    this.salads = !this.salads;
    this.fries = false;
    this.potato = false;
  }

  onSubmit({ value }) {
    console.log('this is value ', value);

    this.orders.unshift(value);
    value.orderDate = new Date();
    this.form.reset();
  }
}
