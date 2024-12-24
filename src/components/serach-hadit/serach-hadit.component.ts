import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-serach-hadit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './serach-hadit.component.html',
  styleUrl: './serach-hadit.component.css'
})
export class SerachHaditComponent {
  @Input() searchControl: FormControl = new FormControl("");
  @Output() AssumeHardSearch: EventEmitter<string> = new EventEmitter<string>();

  triggerHardSearch(){
    this.AssumeHardSearch.emit(this.searchControl.value);
  }
}
