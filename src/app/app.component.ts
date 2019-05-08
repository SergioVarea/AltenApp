import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const WELCOME_PAGE = 1;
const INFO_PAGE = 2;
const RESUME_PAGE = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  private myInfoApi = 'https://api-test.com/api/info';

  showPage: number;
  name: string;
  age: string;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.showPage = WELCOME_PAGE;
  }

  getWelcomePage() {
    return WELCOME_PAGE;
  }

  getInfoPage() {
    return INFO_PAGE;
  }

  getResumePage() {
    return RESUME_PAGE;
  }

  goToWelcomePage() {
    this.showPage = WELCOME_PAGE;
  }

  goToInfoPage(name) {
    if(name) {
      this.name = name;
    }
    this.showPage = INFO_PAGE;
  }

  goToResumePage(age) {
    if(age) {
      this.age = age;
    }
    this.showPage = RESUME_PAGE;
  }

  sendInfo() {
    let data = {
      name: this.name,
      age: this.age
    }
    console.log(data)
    this.httpClient
        .post(this.myInfoApi, data)
        .subscribe((result) => {
          //execute result function
        });
  }
}
