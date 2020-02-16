import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  a: string[] =[];
  flag;
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];           // the size of rows i.e 9 (hard coded)
  columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];        // the size of columns i.e 9
  x: number[] = [];                                       // the array for storing only the x coordinates
  y: number[] = [];                                       // the array for storing only the y coordinates
  move: string = '';                                      // variable for storing the user's direction by selecting from the dropdown
  direction: string[] = ['Up', 'Down'];                   // the array for storing the directions
  newArrx: number[] = [];                                 // the array for storing the value of x coordinates which the drone has move
  newArry: number[] = [];                                 // the array for storing the value of y coordinates which the drone has move
  cordinates: Array<number>[] = [];                       // the array for storing the path coordinates
  constructor() {

  }

  ngOnInit() {

  }

  select(m , n) {                                       // on click event function binded through the view i.e html
    console.log(m, n);
    this.x.push(m);                                     // pushes the x coordinates of starting and end points
    console.log(this.x);
    this.y.push(n);                                     // pushes the y coordinates of starting and end points
    console.log(this.y);

    if (this.x.length === 2) {                          // checks if the length of the x array is 2
      this.newArrx.push(this.x[0]);
      this.newArry.push(this.y[0]);
      if(this.move == "Up") this.a.push("^");
      else if(this.move == "Down") this.a.push("v");

      if(this.y[0] != this.y[1]){

        if(this.y[0] < this.y[1]){

          if(this.x[0] <= this.x[1]){

            if(this.move == "Down"){ // prefarable condition
              // bring them to the same row
              while(this.x[0] != this.x[1]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //when they are at same row go to column by moving right
              while(this.y[0] != this.y[1]){
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
            else if(this.move == "Up"){
                while(this.x[0] > 1){
                  this.x[0]--;
                  this.a.push("^");
                  this.newArrx.push(this.x[0]);
                  this.newArry.push(this.y[0]);
                  console.log(this.x[0], this.y[0]);
                }
                //move to the same column
                while(this.y[0] != this.y[1]){
                  this.y[0]++;
                  this.a.push(">");
                  this.newArrx.push(this.x[0]);
                  this.newArry.push(this.y[0]);
                  console.log(this.x[0], this.y[0]);
                }
                //go down to meet the end point
                while(this.x[0] != this.x[1]){
                  this.x[0]++;
                  this.a.push("v");
                  this.newArrx.push(this.x[0]);
                  this.newArry.push(this.y[0]);
                  console.log(this.x[0], this.y[0]);
                }
            }
          }
          else if(this.x[0] > this.x[1]){
            if(this.move == "Up"){ // prefferable
              while(this.x[0] != this.x[1]){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              // move right to the end point
              while(this.y[0] != this.y[1]){
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
            else if(this.move=="Down"){
              while(this.x[0] < this.x[this.rows.length]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //take right to match the column
              while(this.y[0] != this.y[1]){
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //go up to match the point
              while(this.x[0] != this.x[1]){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
          }
          /*else if(this.x[0] == this.x[1]){
            //move right
            while(this.y[0] != this.y[1]){
              this.y[0]++;
              this.a.push(">");
              this.newArrx.push(this.x[0]);
              this.newArry.push(this.y[0]);
              console.log(this.x[0], this.y[0]);
            }
          }*/
        }
        else if(this.y[0] > this.y[1]){
          
          if(this.x[0] <= this.x[1]){
            if(this.move == "Down"){ // prefarable condition
              // bring them to the same row
              while(this.x[0] != this.x[1]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //when they are at same row go to column by moving left
              while(this.y[0] != this.y[1]){
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
            else if(this.move == "Up"){
                while(this.x[0] > 1){
                  this.x[0]--;
                  this.a.push("^");
                  this.newArrx.push(this.x[0]);
                  this.newArry.push(this.y[0]);
                  console.log(this.x[0], this.y[0]);
                }
                //move to the same column
                while(this.y[0] != this.y[1]){
                  this.y[0]--;
                  this.a.push("<");
                  this.newArrx.push(this.x[0]);
                  this.newArry.push(this.y[0]);
                  console.log(this.x[0], this.y[0]);
                }
                //go down to meet the end point
                while(this.x[0] != this.x[1]){
                  this.x[0]++;
                  this.a.push("v");
                  this.newArrx.push(this.x[0]);
                  this.newArry.push(this.y[0]);
                  console.log(this.x[0], this.y[0]);
                }
            }
          }
          else if(this.x[0] > this.x[1]){
            if(this.move == "Up"){ // prefferable
              while(this.x[0] != this.x[1]){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              // move left to the end point
              while(this.y[0] != this.y[1]){
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
            else if(this.move=="Down"){
              while(this.x[0] < this.x[this.rows.length]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //take left to match the column
              while(this.y[0] != this.y[1]){
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //go up to match the point
              while(this.x[0] != this.x[1]){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
          }
          /*else if(this.x[0] == this.x[1]){
            //move left
            while(this.y[0] != this.y[1]){
              this.y[0]--;
              this.a.push("<");
              this.newArrx.push(this.x[0]);
              this.newArry.push(this.y[0]);
              console.log(this.x[0], this.y[0]);
            }
          }*/
        }
      }
      else if (this.y[0] === this.y[1]) {

        if(this.x[0] != this.x[1]){

          if(this.x[0] > this.x[1]){
            if(this.move == "Up"){//favourable case
              while(this.x[0] != this.x[1]){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
            else if(this.move="Down"){
              while(this.x[0] < this.x[this.rows.length]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //check if are at the leftmost column
              if(this.y[0] == 1){// take right
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              else{//take left everytime
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //need to go up for same row
              while(this.x[0] != this.x[1]){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              if(this.y[1] == 1){ // take left
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              else{
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
          }
          else if(this.x[0] < this.x[1]){
            if(this.move == "Down"){//favourable case
              while(this.x[0] != this.x[1]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
            else if(this.move="Up"){
              while(this.x[0] > 1){
                this.x[0]--;
                this.a.push("^");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //check if are at the leftmost column
              if(this.y[0] == 1){// take right
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              else{//take left everytime
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              //need to go up for same row
              while(this.x[0] != this.x[1]){
                this.x[0]++;
                this.a.push("v");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              if(this.y[1] == 1){ // take left
                this.y[0]--;
                this.a.push("<");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
              else{
                this.y[0]++;
                this.a.push(">");
                this.newArrx.push(this.x[0]);
                this.newArry.push(this.y[0]);
                console.log(this.x[0], this.y[0]);
              }
            }
          }
        }
      }

      this.x = [];
      this.y = [];
      console.log(this.newArrx, this.newArry);                    // printing the values of x and y array on the console
    }
    this.cordinates = [];
    for (let i = 0; i < this.newArrx.length; i++) {
      this.cordinates.push([this.newArrx[i], this.newArry[i]]);     // pushing the immediate x and y coordinates in the cordinates array
    }
    console.log('cordinates are', this.cordinates);
    
  }

  check(m, n) {                                                     // on click event function for printing the desired path
    this.flag = 0;
    for (let j = 0; j < this.newArrx.length; j++) {
      if (m === this.newArrx[j] && n === this.newArry[j]) {
        if(this.a[j] == "^"){
          this.flag = 1;
        }
        else if (this.a[j] == "v"){
          this.flag = 2;
        }
        else if(this.a[j] == "<"){
          this.flag = 3;
        }
        else if(this.a[j] == ">"){
          this.flag = 4;
        }
      }
    }
    
    if (this.flag === 1) {
      return this.flag;
    } else {
     return this.flag;
   }
  }

  reset() {
    window.location.reload();                                   // reload the page for selecting a different direction
  }

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
}
