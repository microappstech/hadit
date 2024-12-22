import { Component, Input, NgModule, OnInit } from '@angular/core';
import { SerachHaditComponent } from "../../components/serach-hadit/serach-hadit.component";
import { ActivatedRoute } from '@angular/router';
import { HaditServiceService } from '../../Services/hadit-service.service';


@Component({
  selector: 'app-hadites',
  standalone: true,
  imports: [SerachHaditComponent],
  templateUrl: './hadites.component.html',
  styleUrl: './hadites.component.css'
})
export class HaditesComponent implements OnInit {
  Hadites:any[]=[];
  CategoryId: any;
  constructor(private route:ActivatedRoute,private haditeseService: HaditServiceService) {

   }
  items = Array.from({length : 26});

  ngOnInit() {   
    this.route.queryParamMap.subscribe(paramMap => {
      const value = paramMap.get('ctg');
      this.CategoryId = value;
      this.getHadites();
    });   
  }
  getHadites(){
    this.haditeseService.getHaditesByCategory(this.CategoryId).subscribe((data: any)=>{
      this.Hadites = data.data;
      console.log(this.Hadites);
    });
  }

}
