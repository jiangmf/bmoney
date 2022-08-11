import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  totalBalance = 547.22;
  remainingBalance : any = 387.22;

  transactions = [
    {
      name:"McDonalds",
      amount: '7.59',
      date: 'Wed. August 03, 2022'
    },
    {
      name:"Cineplex Fairview",
      amount: '23.65',
      date: 'Tue. August 02, 2022'
    },
    {
      name:"Best Buy Inc",
      amount: '59.30',
      date: 'Thu. July 07, 2022'
    },
    {
      name:"CoCo Fresh Tea & Juice",
      amount: '7.80',
      date: 'Mon. July 04, 2022'
    },
  ]

}
