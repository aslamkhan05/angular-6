import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipes'
})
export class CpipesPipe implements PipeTransform {

  transform(value:any, searchTerm:any){
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  };
  }


