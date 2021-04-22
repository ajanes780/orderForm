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
  orderNumber: any = { order: '' };
  @ViewChild('menuForm') form: any;

  constructor(private orderService: OrderserviceService) {}

  ngOnInit() {
    this.order = this.orderService.getOrders();
    this.showBurgersMenu = this.orderService.getShowBurgers();

    this.showSteakMenu = this.orderService.getShowSteakMenu();

    this.getOrderNumber();
  }

  getOrderNumber() {
    let number = Math.floor(Math.random() * 100 + 1);

    this.orderNumber = { order: number };
  }

  showBurgers() {
    this.showBurgersMenu = this.orderService.changeBurgerStatus();
    this.showSteakMenu = false;
    this.fries = false;
    this.salads = false;
  }

  showSteaks() {
    this.showSteakMenu = this.orderService.changeSteakStatus();
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
    // console.log('this is value ', value);
    console.log('this is order', this.order);
    // this.orders.unshift(this.order);
    this.form.reset();
  }
}
