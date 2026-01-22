import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canfly.pipe';
import { HeroeColorPipe } from '../../pipes/heroe-color.pipe';
import { HeroeTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroeCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroeSortByPipe } from '../../pipes/heroe-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroeFilterPipe } from '../../pipes/heroe-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroeColorPipe,
    HeroeTextColorPipe,
    TitleCasePipe,
    HeroeCreatorPipe,
    HeroeSortByPipe,
    HeroeFilterPipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('Adrian');
  uppercase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('');
}
