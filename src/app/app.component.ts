import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Types
import { Currency } from './types/Currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private currenciesUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
  currencies: Currency[] = [];

  constructor(
    private http: HttpClient,
  ) { };

  ngOnInit(): void {
    this.http.get<Currency[]>(this.currenciesUrl)
      .subscribe(currencies => {
        const filteredCurrencies = currencies.filter(currency => currency.ccy !== 'BTC');

        this.currencies = filteredCurrencies;
      });
  }
};
