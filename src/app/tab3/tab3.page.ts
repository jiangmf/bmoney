import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }

  assignedTasks = [
    {
      name: 'Mow the lawn',
      bounty: 5
    },
    {
      name: 'Clean your room',
      due: '2022-08-12',
      bounty: 10
    },
    {
      name: 'Walk the dog',
      bounty: 5
    },
    {
      name: 'Do the dishes',
      bounty: 5
    },
  ]
}
