import { Component, OnInit, ViewChild } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from '../../services/orderervice.service';
import { ControlContainer, NgForm } from '@angular/forms';

//  This really is the heart of form here controling the bigger movements and allowing the drop in of new menu items as needed
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
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
  submitted: boolean = false;
  orderNumber: any = { order: '' };
  @ViewChild('menuForm') form: any;

  // sets up our service to begin ordering
  constructor(private orderService: OrderserviceService) {}

  ngOnInit() {
    this.order = this.orderService.getOrders();
    this.showBurgersMenu = this.orderService.getShowBurgers();
    this.showSteakMenu = this.orderService.getShowSteakMenu();

    this.getOrderNumber();
  }

  //  generate random order numbers
  getOrderNumber() {
    let number = Math.floor(Math.random() * 100 + 1);
    this.orderNumber = { order: number };
  }

  // helper functions for different views
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

  // logic to submit for now just logs order object
  onSubmit({ value, valid }: { value: Orders; valid: boolean }) {
    if (!valid) {
      console.log('form not submitted');
    }
    this.submitted = !this.submitted;

    // you can view the service and the form data match
    console.log(`value`, value);
    console.log('this is order', this.order);
    // we can use a form reset here to rest the form currently the service is mapped to display the data
    //  I could refactor the could to use the submitted data as well depending on your preference
    // this.form.reset()
  }
}
