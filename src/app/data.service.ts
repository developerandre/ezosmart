import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  baseUrl: string = "http://localhost:4300/api";
  constructor(public http: Http) {}
  sendMessage(texte: any): Observable<any> {
    let headers: Headers = new Headers();
    headers.append("content-type", "application/x-www-form-urlencoded");
    let opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    return this.http.post(`${this.baseUrl}/postmsg`, texte, opts);
  }
  getMessages(phone: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getmsg/${phone}`);
  }
  login(data: any): Observable<any> {
    console.log(data);
    let headers: Headers = new Headers();
    headers.append("content-type", "application/x-www-form-urlencoded");
    let opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    return this.http.post(`${this.baseUrl}/login`, data, opts);
  }
  register(data: any): Observable<any> {
    console.log(data);
    let headers: Headers = new Headers();
    headers.append("content-type", "application/x-www-form-urlencoded");
    let opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    return this.http.post(`${this.baseUrl}/signup`, data, opts);
  }
  getMap(): Observable<any> {
    let map: Array<any> = [
      {
        name: "Monona Terrace Convention Center",
        lat: 43.071584,
        lng: -89.38012,
        center: true
      },
      {
        name: "Ionic HQ",
        lat: 43.074395,
        lng: -89.381056
      },
      {
        name: "Afterparty - Brocach Irish Pub",
        lat: 43.07336,
        lng: -89.38335
      }
    ];
    return Observable.create((observer: any) => {
      observer.next(map);
      observer.complete();
    });
  }
}
