import { Component, OnDestroy, OnInit } from '@angular/core';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, OnDestroy {
  hours: any;
  minutes: any;
  seconds: any;
  timeLeft: any;
  ticketNumber = this.ticketInfoServiceService.getTicketNumber();

  constructor(private ticketInfoServiceService: TicketInfoService){}

  ngOnInit(): void {
    this.updateTime(new Date());
  }

  ngOnDestroy(): void {
    clearInterval(this.timeLeft);
  }

  private updateTime(date: Date) {
    this.timeLeft = setInterval(() => {
      this.hours = 23 - date.getHours();
      this.minutes = 59 - date.getMinutes();
      this.seconds = 59 - date.getSeconds();
      date = new Date();      
    }, 1000);
  }
}
