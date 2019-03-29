import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuoteModel } from './quoteModel';

@Injectable({
    providedIn: 'root'
})
export class QuoteDataService {

    url: string = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

    constructor(private http: HttpClient) { }

    getQuoteObj(): Observable<QuoteModel[]> {
        return this.http.get<QuoteModel[]>(this.url + " " + new Date().getTime());
    }
}
