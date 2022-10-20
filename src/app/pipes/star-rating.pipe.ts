import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number | undefined, includeHalfStar: boolean = false): string {
    if (value == undefined) return "";

    value = Math.max(0, Math.min(5, value));

    let result = "★".repeat(Math[includeHalfStar ? 'trunc' : 'round'](value));
    if (includeHalfStar && value % 2) result += "⯪";

    return result.padEnd(5, "☆");
  }

}
