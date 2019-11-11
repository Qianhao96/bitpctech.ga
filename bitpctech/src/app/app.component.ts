import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'bitpctech';

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
      this.myStyle = {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'z-index': 0,
          'top': '65px',
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

  this.myParams = {
          particles: {
              number: {
                  value: 60,
              },
              color: {
                  value: '#ff0000'
              },
              shape: {
                  type: 'triangle',
              },
      }
  };
  }
}