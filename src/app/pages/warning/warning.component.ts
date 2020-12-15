import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  tab1acticeID = 'tab2';
  constructor() { }

  ngOnInit(): void {
  }
 
  activeTabChange(id) {
    console.log(id);
  }
 
}
