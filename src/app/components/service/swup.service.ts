import { Injectable } from '@angular/core';
import Swup from 'swup';

@Injectable({
  providedIn: 'root',
})
export class SwupService {
  private swup: Swup;

  constructor() {
   
    this. swup = new Swup({
      containers: ["#swup"]
    });
    
}
}