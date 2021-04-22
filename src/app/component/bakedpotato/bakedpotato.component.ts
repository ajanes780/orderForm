import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from '../../services/orderervice.service';

import { ControlContainer, NgForm } from '@angular/forms';
@Component({
  selector: 'app-bakedpotato',
  templateUrl: './bakedpotato.component.html',
  styleUrls: ['./bakedpotato.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class BakedpotatoComponent implements OnInit {
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
  constructor(private orderService: OrderserviceService) {}

  ngOnInit() {
    this.order = this.orderService.getOrders();
  }
}
