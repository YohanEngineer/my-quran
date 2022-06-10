import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export class SurahList {
  constructor(
    public surah_number: number,
    public surah_name: string
  ) { }
}

export class Surah {
  constructor(
    public aya_number: number,
    public verse: string
  ) { }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  surahList: SurahList[];
  surah: Surah[];
  selectSurah: boolean = false;
  displaySurah: boolean = false;
  id:string = '';
  @Output() hideData = new EventEmitter<boolean> ();

  constructor(
    private httpClient: HttpClient
  ) { }


  ngOnInit(): void {
    this.hideData.emit(true);
  }

  selectChangeHandler (event: any) {
    this.id = event.target.value;
    this.displayingSurah();
  }

  getAllSurah() {
    let allSurahUrl: string = 'http://192.168.1.243/surah/all';
    this.httpClient.get<any>(allSurahUrl).subscribe(
      response => {
        console.log(response);
        this.surahList = response;
      });
  }

  getSurah(id: string) {
    let surahUrl: string = 'http://192.168.1.243/surah/?id=' + id;
    this.httpClient.get<any>(surahUrl).subscribe(
      response => {
        console.log(response);
        this.surah = response;
      });
  }


  retrieveSurahList() {
    this.getAllSurah();
    this.selectSurah = true;
  }

  displayingSurah() {
    this.getSurah(this.id);
    this.displaySurah = true;
    this.hideData.emit(false);
  }

}
