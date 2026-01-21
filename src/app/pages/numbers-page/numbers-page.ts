import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import {  Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {

  totalSells = signal(2_425_631.5568);
  percent = signal(0.4856);

 }
