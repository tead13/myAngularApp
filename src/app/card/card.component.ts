import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  //postoecki inputi
  @Input() motov:Driver | undefined;
  @Input() indx: Number | undefined;

  //EventEmitter za interakcii so card
  cuci = new EventEmitter<Driver>();
  
  //sostojbu za ARIA atributi
  isLoading = false; //aria-busy
  isExpanded = false; //aria-expanded
  isError = false; //aria-invalid

  //otvara slikata na vozacot vo nov tab
  onDrvView(){
    this.isLoading = true; // se postavuva na loading sostojba za aria-busy
    let link: string | undefined;

    if(this.motov?.iconUrl){
      link = this.motov?.iconUrl;
    } else {
      link = "https://www.google.com";
    }

    window.open(link, "_blank");
    this.isLoading = false; //pravi reset na loading sostojbata
    
    /*console.log("eve kliknav bace");
    //this.cuci.emit(this.motov)
    
    let link: string | undefined; // --> TS

    //var link = ''; //--> JS

    if (this.motov?.iconUrl)
    {link = this.motov?.iconUrl}
    else
    {
      link = "https://www.google.com"
    };

    window.open(link, "_blank")*/
  }

  klasi(){
    return {'begin':this.motov?.category=='ASD', 
      
      'adv':this.motov?.category=='EXPERT', 
      
      'undr':true}
  }

  klasi2(){
    if (this.motov?.category=='ASD') {return 'begin'}
    else {return 'adv'}
  }

  stilovi(){
    return 'underline'
  }

  ngOnInit(): void {
    
  }

}

/* card.component.ts
import { Component } from '@angular/core';

// Define an interface for your driver data
interface Driver {
  name: string;
  points: number;
  image: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Add the drivers array
  drivers: Driver[] = [
    {
      name: 'First Driver',
      points: 210,
      image: 'assets/driver1.jpg'  // Make sure you have images in your assets folder
    },
    {
      name: 'Second Driver',
      points: 310,
      image: 'assets/driver2.jpg'
    },
    // Add more drivers as needed
  ];

  // Add the viewDriver method
  viewDriver(driver: Driver): void {
    console.log('Viewing driver:', driver.name);
    // Add your logic here for what should happen when clicking the button
  }
}*/
