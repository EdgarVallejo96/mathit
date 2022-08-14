import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ticTactToeSquares = 3;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
