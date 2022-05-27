import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyCalculatorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { };
