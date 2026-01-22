import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroeCreator'
})

export class HeroeCreatorPipe implements PipeTransform {
    transform(creator: Creator): string {
        return Creator[creator];
    }
}