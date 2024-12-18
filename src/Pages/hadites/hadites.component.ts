import { Component, NgModule } from '@angular/core';
import { SerachHaditComponent } from "../../components/serach-hadit/serach-hadit.component";


@Component({
  selector: 'app-hadites',
  standalone: true,
  imports: [SerachHaditComponent],
  templateUrl: './hadites.component.html',
  styleUrl: './hadites.component.css'
})
export class HaditesComponent {
  items = Array.from({length : 26});
}
