import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketInfoService {
  constructor() {}

  getTicketNumber() {
    const lsTicketNumber = localStorage.getItem('ticketNumber');
    if (lsTicketNumber) {
      return lsTicketNumber;
    }

    const ticketNumber = `D00005509${Math.floor(Math.random() * 999) + 100}`;
    localStorage.setItem('ticketNumber', `${ticketNumber}`);
    return ticketNumber;
  }

  getPurchaseNumber() {
    const lsPurchaseNumber = localStorage.getItem('purchasNumber');
    if (lsPurchaseNumber) {
      return lsPurchaseNumber;
    }

    const purchasNumber = `0005718${Math.floor(Math.random() * 999) + 100}`;
    localStorage.setItem('purchasNumber', `${purchasNumber}`);
    return purchasNumber;
  }

  getDayInfo() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return { day, month, year };
  }
}
