import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  checkout(desc: any, commen: any) {
    const url = "https://demo.wo.instio.co/customer/wo";
    const data = {
      "workOrderType": "REQUEST",
      "priority": "10",
      "service": "IRD Menu",
      "addedByStaff":"false"
    
    }
   
    const ini="5c569717169aae1c9eb5a00a"
    const com="5c419931169aae5fdadade33"
   
const headers = new HttpHeaders().set('Content-Type','application/json').set('customerId',"String")
    return this.http.post(url, {data,comment:commen,description:desc,initiatedById:ini,companyId:com},{headers:headers})
  }}
