import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { DRIVERS } from '../db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'test';
  
  PB = DRIVERS[0];

  JM = DRIVERS[1];

  MM = DRIVERS[2];

  vozaci = DRIVERS;

  isVisible = false;
  isLoading = false; //aria-busy

  onAppView(){
    console.log("eve kliknav bace na APP");
  }

  //so ARIA 
  Dze(){
    this.isVisible = ! this.isVisible;
    //se proglasuva promenata na screen readers
    const announcement = this.isVisible ? 'Showing homework' : 'Hiding homework';
    this.announceToScreenReader(announcement);
  }

  // pomosen metod za screen reader announcements
  private announceToScreenReader(message: string) {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.innerText = message;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
  }


}
