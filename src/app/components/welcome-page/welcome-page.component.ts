import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-page-component',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  @Output()
  nextPage: EventEmitter<string> = new EventEmitter<string>();
  
  @Input()
  name: string;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.nextPage.emit(this.name);
  }

}
