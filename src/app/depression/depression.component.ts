import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import{ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-depression',
  templateUrl: './depression.component.html',
  styleUrls: ['./depression.component.css'],
})


export class DepressionComponent implements OnInit {

  constructor() { }
  public score: number = 0;
  public isOne: boolean = false;
  public isZero: boolean = false;
  public isTwo: boolean = false;
  public isThree: boolean =  false;
  public isFour: boolean = false;
  public isFive: boolean =  false;


  ngOnInit(): void {
  }

  addZero(){
    if(this.isZero==true){} else {
      this.isZero = true;

      if (this.isOne == true) {
        this.score -= 1;
        this.isOne = false;
      } else if(this.isTwo == true) {
        this.score -= 2;
        this.isTwo = false;
      } else if (this.isThree == true) {
        this.score -= 3;
        this.isThree = false;
      } else if (this.isFour == true) {
        this.score -= 4;
        this.isFour = false;
      } else if (this.isFive == true) {
        this.score -= 5;
        this.isFive = false;
      }
    }

  }

  addOne(){
    if(this.isOne == true){

    } else {
      this.score++;
      this.isOne = true;

      if (this.isZero == true) {
        this.isZero = false;
      }  else if (this.isTwo == true) {
        this.score -= 2;
        this.isTwo = false;
      } else if (this.isThree == true) {
        this.score -= 3;
        this.isThree = false;
      } else if (this.isFour == true) {
        this.score -= 4;
        this.isFour = false;
      } else if (this.isFive == true) {
        this.score -= 5;
        this.isFive = false;
      }
    }
  }

  addTwo(){
    if(this.isTwo == true){

    } else {
      this.score += 2;
      this.isTwo = true;

      if (this.isZero == true) {
        this.isZero = false;
      }  else if (this.isOne == true) {
        this.score -= 1;
        this.isTwo = false;
      } else if (this.isThree == true) {
        this.score -= 3;
        this.isThree = false;
      } else if (this.isFour == true) {
        this.score -= 4;
        this.isFour = false;
      } else if (this.isFive == true) {
        this.score -= 5;
        this.isFive = false;
      }

    }
  }

  addThree(){
    if(this.isThree == true){

    } else {
      this.score += 3;
      this.isThree = true;

      if (this.isZero == true) {
        this.isZero = false;
      }  else if (this.isOne == true) {
        this.score -= 1;
        this.isOne = false;
      } else if (this.isTwo == true) {
        this.score -= 2;
        this.isTwo = false;
      } else if (this.isFour == true) {
        this.score -= 4;
        this.isFour = false;
      } else if (this.isFive == true) {
        this.score -= 5;
        this.isFive = false;
      }

    }
  }

  addFour(){
    if(this.isFour == true){

    } else {
      this.score += 4;
      this.isFour = true;

      if (this.isZero == true) {
        this.isZero = false;
      }  else if (this.isOne == true) {
        this.score -= 1;
        this.isOne = false;
      }  else if(this.isTwo == true) {
        this.score -= 2;
        this.isTwo = false;
      }else
       if (this.isThree == true) {
        this.score -= 3;
        this.isThree = false;
      } else if (this.isFive == true) {
        this.score -= 5;
        this.isFive = false;
      }
    }
  }

  addFive(){
    if(this.isFive == true){

    } else {
      this.score += 5;
      this.isFive = true;

      if (this.isZero == true) {
        this.isZero = false;
      }  else if (this.isOne == true) {
        this.score -= 1;
        this.isOne = false;
      }  else if(this.isTwo == true) {
        this.score -= 2;
        this.isTwo = false;
      }else
      if (this.isThree == true) {
        this.score -= 3;
        this.isThree = false;
      } else if (this.isFour == true) {
        this.score -= 4;
        this.isFour = false;
      }
    }
  }
}
