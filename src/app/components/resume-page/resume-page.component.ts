import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resume-page-component',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  @Output() sendInfo: EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  ngOnInit() {
  }

  send() {
    this.sendInfo.emit(null);
  }
}
