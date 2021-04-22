import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from '../../services/orderervice.service';
@Component({
  selector: 'app-fries',
  templateUrl: './fries.component.html',
  styleUrls: ['./fries.component.scss'],
})
export class FriesComponent implements OnInit {
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
