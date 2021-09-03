import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  
  transform(value: Date): string {
   
    let calc= Date.now()-new Date(value).getTime();
    let day= Math.floor(calc/86400000);
    if(day===1) return "Yesterday"
    else if(day) return day+" days ago"
    else return "Today";
  }

}
