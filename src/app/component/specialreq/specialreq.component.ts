import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from '../../services/orderervice.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-specialreq',
  templateUrl: './specialreq.component.html',
  styleUrls: ['./specialreq.component.scss'],
})
export class SpecialreqComponent implements OnInit {
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
  constructor(
    private orderService: OrderserviceService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.order = this.orderService.getOrders();
  }

  open(content) {
    if (this.order.burgerType === '' || this.order.steakType === '') {
      // Totally should build another pop up with more time
      alert('Please make a selection ');
    } else {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
  }
}
