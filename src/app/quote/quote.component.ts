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

    quoteObj: QuoteModel[] = [];

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

}
