import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-info-page-component',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  
  @Input()
  age: string;
  @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() prevPage: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.nextPage.emit(parseInt(this.age));
  }

  prev() {
    this.prevPage.emit(null);
  }


}
