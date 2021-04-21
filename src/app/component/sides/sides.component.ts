import { Component, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Output, EventEmitter } from '@angular/core';
import { Orders } from 'src/app/models/Orders';
import { OrderserviceService } from 'src/app/services/orderervice.service';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss'],
})
export class SidesComponent implements OnInit {
  constructor(private orderService: OrderserviceService) {}

  ngOnInit() {}
}
