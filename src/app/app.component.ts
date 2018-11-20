import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'typed-angular';

  ngOnInit() {
    // const greeting = [
    //   'is functionally creative',
    //   'hunts down bugs',
    //   'snacks a lot',
    //   'keeps succulents as pets',
    // ];
    // const options = {
    //   strings: greeting,
    //   typeSpeed: 100,
    //   backSpeed: 100,
    //   startDelay: 500,
    //   backDelay: 4500,
    //   loop: true,
    // };
    //  const typed = new Typed('.typed-text', options);
    //  typed.start();
  }
}
