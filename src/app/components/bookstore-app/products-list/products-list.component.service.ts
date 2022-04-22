import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable ()

export class BookService {

    private url = 'https://apibookstore20220408185052.azurewebsites.net/api/bookstore';

    httpOptions= {
        Headers: new HttpHeaders ({'content-type': 'application/json'})
    }
    
    constructor(private http:HttpClient) {}

    getBook () {
        return this.http.get(this.url)
    }
}