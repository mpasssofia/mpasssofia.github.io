import { Component } from '@angular/core';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss'],
})
export class TicketInfoComponent {
  today = this.ticketInfoServiceService.getDayInfo();
  ticketNumber = this.ticketInfoServiceService.getTicketNumber();
  pruchasNumber = this.ticketInfoServiceService.getPurchaseNumber();

  constructor(private ticketInfoServiceService: TicketInfoService) {}
}
