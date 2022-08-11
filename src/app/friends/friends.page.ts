import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friends = [
    {
      name: "Adam Lewis",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
      birthday: "May 4, 2006"
    },
    {
      name: "Cathy Beth",
      avatar: "https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=429f6ca8c2584cb066893a0e0818effb",
      birthday: "January 20, 2006"
    },
    {
      name: "Elayah Benson",
      avatar: "https://i.imgur.com/Nf4Qwa7.jpg",
      birthday: "December 2, 2006"
    },
    {
      name: "Jacob Cantelon",
      avatar: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      birthday: "September 7, 2006"
    }
  ]

  family = [
    {
      name: "Mom",
      avatar: "https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40",
      birthday: "April 7, 1985"
    },
    {
      name: "Dad",
      avatar: "https://images.generated.photos/vnmD0Nag51iNQlEMb107W2zmqi2-5SasVgtsiAm7lJw/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM3NDY0LmpwZw.jpg",
      birthday: "June 17, 1977"
    },
    {
      name: "Grandma",
      avatar: "https://images.generated.photos/dw4QSI5qY00ukvfmZFfzMM-chgYgaaUx6UU43Xedzig/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODc2NzAyLmpwZw.jpg",
      birthday: "July 28, 1960"
    },
  ]

}
