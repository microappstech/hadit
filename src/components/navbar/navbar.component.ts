import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeRoute :string ='';
  constructor(private router:Router){
    this.router.events.subscribe(()=>{
      this.activeRoute = this.router.url;
    })
  }
  isActive(link:string) : boolean
  {
    let Activeroute =this.activeRoute.split("?")[0];
    return Activeroute==link;
  }
}
