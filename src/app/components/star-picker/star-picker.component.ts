import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-picker',
  templateUrl: './star-picker.component.html',
  styleUrls: ['./star-picker.component.scss']
})
export class StarPickerComponent {

  @Input() name!: string;
  @Input() id!: string | undefined;

}
