import { Component, NgModule, OnInit } from '@angular/core';
import { SerachHaditComponent } from "../../components/serach-hadit/serach-hadit.component";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hadites',
  standalone: true,
  imports: [SerachHaditComponent],
  templateUrl: './hadites.component.html',
  styleUrl: './hadites.component.css'
})
export class HaditesComponent implements OnInit {
  CategoryId: any;
  constructor(private route:ActivatedRoute) {

   }
  items = Array.from({length : 26});

  ngOnInit() {   
    this.route.queryParamMap.subscribe(paramMap => {
      const value = paramMap.get('ctg');
      this.CategoryId = value;
      console.log(this.CategoryId)
    });
    
}
}
