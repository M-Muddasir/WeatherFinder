import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {

  responseData:CityWeather[];
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
  }

  onSearch(event:any){
    this.responseData=[];
    this.httpClient.get(`https://jsonmock.hackerrank.com/api/weather?name=${event.value}`).subscribe((res:ApiResponse)=>{
      this.responseData=res.data;
      console.log(this.responseData)
    })
  }
}
