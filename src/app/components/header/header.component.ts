import { Component, OnInit, Input } from '@angular/core';

// Types
import { Currency } from 'src/app/types/Currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() currencies?: Currency[];

  usdCurrency: Currency | null = null;
  eurCurrency: Currency | null = null;

  ngOnInit(): void {
    const usdCcy = this.currencies?.find(currency => currency.ccy === 'USD') || null;
    const eurCcy = this.currencies?.find(currency => currency.ccy === 'EUR') || null;

    this.usdCurrency = usdCcy;
    this.eurCurrency = eurCcy;
  };
};
