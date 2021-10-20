import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


import data from '../data/data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public itemList:{itemname:string,category:string,description:string,price:any, url:string}[] = data;
 
  datas(item:any){
    
    const queryParams: any = {};

    queryParams.myArray = JSON.stringify(item);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };

    // Navigate to component B
    this.router.navigate(["/car"], navigationExtras);
  }
}
