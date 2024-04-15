import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-football-competition',
  templateUrl: './football-competition.component.html',
  styleUrl: './football-competition.component.css'
})
export class FootballCompetitionComponent implements OnInit {
  constructor(private _http: HttpClient){}
  currentpage: number = 1;
  total_pages: number[] = [];
  competitionData: data[] = [];

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions(pageNo?: number) {
    if(pageNo) this.currentpage = pageNo;

    this.fetchFromApi().subscribe(resp => {
      this.total_pages = Array.from(Array(resp.total_pages).keys());
      this.competitionData = resp.data;
    })
  }

  fetchFromApi(): Observable<ApiResponse> {
    const url = 'https://jsonmock.hackerrank.com/api/football_competitions?page=' + this.currentpage
    return this._http.get<ApiResponse>(url).pipe(
      map(item => item)
    )
  }
}

interface data {
  name: string,
  country: string,
  year: number,
  winner: string,
  runnerup: string
}

interface ApiResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: data[]
}