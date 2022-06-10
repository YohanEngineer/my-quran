import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hideData:boolean;
  ngOnInit(): void {
    console.log('Application started !');
  }
  title = 'my-quran';

  emittedDataByChild(data:boolean) {
    this.hideData = data;
  }
}
