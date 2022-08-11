import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'
import confetti from 'canvas-confetti'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    
  }

  totalBalance = 547.22;
  remainingBalance : any = this.totalBalance;


  categories = [
    {
      "name": "My Goals",
      "goals": [
        {
          "title": "Wonderland with Kevin",
          "amount": 20,
          "target": 100,
        },
        {
          "title": "New Bike",
          "amount": 50,
          "target": 250,
        }
      ]
    },
    {
      "name": "Birthdays",
      "goals": [
        {
          "title": "Kevin's Birthday",
          "amount": 10,
          "target": 20,
        }
      ]
    }
  ]

  updateBalance() {
    this.remainingBalance = this.totalBalance;
    for (let category of this.categories) {
      for (let goal of category.goals) {
        this.remainingBalance -= goal.amount;
      }
    }
    this.remainingBalance = this.remainingBalance.toFixed(2)
  }

  ngOnInit() {
    this.updateBalance();
  }

}
