import { Component, Input, NgModule, OnInit } from '@angular/core';
import { SerachHaditComponent } from "../../components/serach-hadit/serach-hadit.component";
import { ActivatedRoute } from '@angular/router';
import { HaditServiceService } from '../../Services/hadit-service.service';
import { Hadit } from '../../interfaces/Hadite.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-hadites',
  standalone: true,
  imports: [SerachHaditComponent,ReactiveFormsModule],
  templateUrl: './hadites.component.html',
  styleUrl: './hadites.component.css'
})
export class HaditesComponent implements OnInit {
  Hadites:any[]=[];
  searchControl = new FormControl("");
  CategoryId: any;
  isLoading = false;  
  constructor(private route:ActivatedRoute,private haditeseService: HaditServiceService) {

   }
  items = Array.from({length : 26});

  ngOnInit() {   
    this.route.queryParamMap.subscribe(paramMap => {
      const value = paramMap.get('ctg');
      this.CategoryId = value;
      console.log(this.CategoryId);
      this.getHadites();
    });  
    
    this.searchControl.valueChanges.subscribe((value) => {
      
      this.searchHadit(value);
    });
  }

  searchHadit(value: any){
    console.log("Search Applied");
    this.isLoading = true;
    this.haditeseService.searchHadites(value)
    .subscribe((data: any)=>{
      this.Hadites = data.data;
      this.isLoading = false;
    });
  }
  getHadites(){
    if(this.CategoryId==null){
      this.haditeseService.getAllHadites()
      .pipe(
        catchError(error=>{
          console.log(error);
          return error;
        })
      )
      .subscribe((data: any)=>{
        this.Hadites = data.data;
        console.log(data);
      })
    }else{
      this.haditeseService.getHaditesByCategory(this.CategoryId).subscribe((data: any)=>{
        this.Hadites = data.data;
        console.log(this.Hadites);
      });
    }
  }
  async shareHadit(hadit: Hadit){
    const shareData = {
      content: hadit.Content,
      on:hadit.OnPublisher,
      url: this.route.toString()
    }
    try{
      if(navigator.share && navigator.canShare(shareData)){
        await navigator.share(shareData);
        console.log(shareData);
        
      }else{
        console.error('Web Share API is not supported on this device.');
        alert('Sharing is not supported on this browser.');
       
      }

    }catch(error){
      console.error('Error sharing:', error);
    }
  }

}
