import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroeColor'
})

export class HeroeColorPipe implements PipeTransform {
    transform(heroeColor: number): string {
        
        return Color[heroeColor]
    }
}