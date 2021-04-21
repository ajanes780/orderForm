import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from '../../services/orderervice.service';
@Component({
  selector: 'app-bakedpotato',
  templateUrl: './bakedpotato.component.html',
  styleUrls: ['./bakedpotato.component.scss'],
})
export class BakedpotatoComponent implements OnInit {
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
  constructor(private orderService: OrderserviceService) {}

  ngOnInit() {
    this.order = this.orderService.getOrders();
  }
}
