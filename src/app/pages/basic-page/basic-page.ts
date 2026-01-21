import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { interval } from 'rxjs';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocaleService);
  currentLocale = this.localeService.getLocale

  nameLower = signal('adrian');
  nameUpper = signal('ADRIAN')
  fullName = signal('AdRIan OrTIZ')

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    })

  })

  changeLocale(locale: AvailableLocale){
    this.localeService.changeLocale(locale);
  }
 }

 
