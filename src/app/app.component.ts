import { Component } from '@angular/core';
import { SwupService } from './components/service/swup.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  
  constructor(private swupService: SwupService) {}

}