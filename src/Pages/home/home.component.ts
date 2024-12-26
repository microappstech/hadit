import { Component, OnInit } from '@angular/core';
import { HaditServiceService } from '../../Services/hadit-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: any = [];
  constructor(private haditService: HaditServiceService) { }
  ngOnInit(): void {
    this.fetchCates();
    // console.log(this.categories);
  }
  
  fetchCates()
  {
    this.haditService.getCategories().subscribe((data: any)=>{
      this.categories = data.data;
    this.categories.unshift({id:null,name:"كل الأحاديث"});
      
    });
    
  }
  
}
