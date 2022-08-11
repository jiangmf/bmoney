import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  notifications = [
    {
      message: "🎂 Kevin's birthday's coming up in 5 days, would you like to schedule a transfer?",
      date: "5m ago",
      unread: true
    },
    {
      message: "✅ Clean you room is due in 5 days, complete to earn $2!",
      date: "10m ago"
    },
    {
      message: "💵 Cha-ching! Your weekly allowance of $20 has been deposited!",
      date: "2d ago"
    },
    {
      message: "🎯 Your goal - Air Pods is due in 5 days, allocate $25 more to complete your goal!",
      date: "2w ago"
    },
    {
      message: "💸 Josh requested for $7 - You owe me a Bubble Tea",
      date: "2w ago"
    }
  ]

}
