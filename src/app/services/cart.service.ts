import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  checkout(desc: any, commen: any) {
    const url = "https://demo.wo.instio.co/customer/wo";


    const ini = "5c569717169aae1c9eb5a00a"
    const com = "5c419931169aae5fdadade33"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        customerId: `5c569717169aae1c9eb5a00a`
      })
    };

    return this.http.post(url, JSON.stringify({
      workOrderType: `REQUEST`,
      priority: 10,
      service: `IRD Menu`,
      addedByStaff: false,

      comment: commen.itemname, description: desc.name, initiatedById: ini, companyId: com
    }), httpOptions)
  }
}
