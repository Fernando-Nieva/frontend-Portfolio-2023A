import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string ="nieva.gmail.com";

  constructor(){
  }

  
    ngOnInit() {

      $("header").css("background","red");
                
 
  }

}
