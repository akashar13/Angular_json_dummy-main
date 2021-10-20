import { Component } from '@angular/core';
import data from './data/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public countryList:{name:string, code:string}[] = data;

}
