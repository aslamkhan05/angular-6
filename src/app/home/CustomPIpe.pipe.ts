import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'akpipe'
})

export class CustomPipe implements PipeTransform{
    transform(value:any){
        return value.substr(0,5)
    }

}