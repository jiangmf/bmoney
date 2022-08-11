import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as confetti from 'canvas-confetti';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

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
    this.generateChart();
  }

  onDrop(event, i, j) {

    let amount = Math.min(event.dropData, this.categories[i].goals[j].target - this.categories[i].goals[j].amount);

    this.categories[i].goals[j].amount += amount;


    this.updateBalance();
    this.generateChart();

    if (this.categories[i].goals[j].amount >= this.categories[i].goals[j].target) {
      var canvas = document.getElementById('custom-canvas');
      canvas.style.display = "block";
      console.log('here')
      confetti.create(canvas)({
        particleCount: 100,
        spread: 360,
        startVelocity: 10,
        resize: true,
      });
      this.presentAlert()

      setTimeout(() => {
        canvas.style.display = "none";
      }, 5000);
    }



  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Horray! 🎉',
      message: 'Congradulations on reaching your goal! Do you want to share this achivement?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Share',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  generateChart() {
    var data = {
      labels: [],
      datasets: [{
        label: 'My First Dataset',
        data: [],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    for (let category of this.categories) {
      data.labels.push(category.name)
      var sum = 0;
      for (let goal of category.goals) {
        sum += goal.amount;
      }
      data.datasets[0].data.push(sum)
    }

    data.labels.push("Remaining Balance")
    data.datasets[0].data.push(this.remainingBalance);


    const config = {
      type: 'doughnut',
      data: data,
      responsive: false,
      
      options: {
        legend: {
          position: 'right' as const
        }
      }
    };
    window.Chart.defaults.global.legend.position = 'top';
    this.myChart = new Chart(
      document.getElementById('myChart') as HTMLCanvasElement,
      config
      );

    this.myChart.options.animation= false;

  }

    myChart;
  



}

