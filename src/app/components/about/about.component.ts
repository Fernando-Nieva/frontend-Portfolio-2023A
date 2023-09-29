import { Component,OnInit } from '@angular/core';
import { SwupService } from '../service/swup.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  public title:string;
  public subtitle:string;
  public email: string;

  constructor(private swupService: SwupService) { // Inyecta el servicio en el constructor
    this.title="Fernando Nieva";
    this.subtitle="Desarrollador Full Stack";
    
    
   
    // this.email="nieva.gmail.com";
    

  }
  ngOnInit(){
    
  }

}
