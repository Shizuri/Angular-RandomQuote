import { Component, OnInit } from '@angular/core';
import { QuoteDataService } from '../quote-data.service';
import { Observable } from 'rxjs';
import { QuoteModel } from '../quoteModel';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    // private quote = [];
    // private quoteObservable: Observable<any[]>

    quoteObj: QuoteModel[] = [];
    // author: string;
    // content: string;

    constructor(private quoteData: QuoteDataService) { }

    ngOnInit() {
        this.getQuoteObj();
    }

    getQuoteObj() {
        this.quoteData.getQuoteObj().subscribe(
            res => {
                console.log(res);
                this.quoteObj = res;
            });
    }

    newQuote() {

    }

    // getQuote() {
    //     this.quoteData.getQuote().subscribe((res: any[]) => {
    //         console.log(res);
    //         this.quote = res;
    //     });
    //     // this.convertToString();
    // }

    // getQuoteObj2() {
    //     this.quoteData.getQuote().subscribe((res: QuoteModel[]) => {
    //         console.log(res);
    //         this.quoteObj = res;
    //     });
    // }

    // convertToString() {
    //     this.getQuoteObj();
    //     let source = this.quoteObj[0];
    //     console.log('source:', source);
    //     this.author = source.title;
    //     this.content = source.content;
    // }

    // convertToStringFromObj() {
    //     let source: QuoteModel = this.quoteObj[0];
    //     console.log('source: ', source);
    // }

    // qetQuoteObs() {
    //     this.quoteObservable = this.quoteData.getQuote();
    // }

}
