import { Component } from '@angular/core';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  today = this.ticketInfoServiceService.getDayInfo();

  constructor(private ticketInfoServiceService: TicketInfoService) {}
}
