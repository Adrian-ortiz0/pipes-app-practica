import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroeTextColor'
})

export class HeroeTextColorPipe implements PipeTransform {
    transform(color: Color): string {
        return ColorMap[color];
    }
}