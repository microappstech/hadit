import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showNavbar = true;
  showFooter = true;
  title = 'hadit';
  constructor(private router:Router)
  {
   this.router.events.subscribe(()=>{
    const currentRoute = this.router.url;
    // console.log(currentRoute)
    // this.showNavbar = currentRoute != "/login";
    // this.showFooter = currentRoute != "/login";
   }); 
  }
}
