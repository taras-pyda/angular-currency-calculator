import { Component, Input, DoCheck } from '@angular/core';

// Types
import { Currency } from 'src/app/types/Currency';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss']
})

export class CurrencyCalculatorComponent implements DoCheck {
  @Input() currencies?: Currency[];

  uahCurrency = {
    base_ccy: 'UAH',
    buy: '1',
    ccy: 'UAH',
    sale: '1',
  };
  canChangeSaleSum = true;
  saleCurrency = 'USD';
  buyCurrency = 'UAH';
  saleSum = 100;
  buySum = this.saleSum * this.getExchangeRate();

  ngDoCheck() {
    const exchangeRate = this.getExchangeRate();

    if (this.canChangeSaleSum) {
      this.buySum = +(this.saleSum * exchangeRate).toFixed(5);
    } else {
      this.saleSum = +(this.buySum / exchangeRate).toFixed(5);
    }
  }

  getExchangeRate() {
    const saleCcy = this.currencies?.find(currency => currency.ccy === this.saleCurrency) || this.uahCurrency;
    const buyCcy = this.currencies?.find(currency => currency.ccy === this.buyCurrency) || this.uahCurrency;

    let exchangeRate = (+saleCcy.buy) / (+buyCcy.sale);

    if (saleCcy.ccy === 'UAH') {
      exchangeRate = (+this.uahCurrency.buy) / (+buyCcy.sale);
    };

    if (buyCcy.ccy === 'UAH') {
      exchangeRate = +saleCcy.buy;
    };

    return +exchangeRate.toFixed(5);
  };

  allowsChangeSaleSum() {
    this.canChangeSaleSum = true;
  };

  forbidsChangeBuySum() {
    this.canChangeSaleSum = false;
  };
};
