import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsm5',
  templateUrl: './dsm5.component.html',
  styleUrls: ['./dsm5.component.css']
})
export class Dsm5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pdfSource =  "../assets/DSM.pdf";
}
