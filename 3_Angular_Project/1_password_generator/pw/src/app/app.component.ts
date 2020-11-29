import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password ='';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  onChangeUseLetters(){

    this.includeLetters= !this.includeLetters;

  }

  onChangeUseNumbers(){
    this.includeNumbers= !this.includeNumbers;
  }
  onChangeUseSymbols() {

    this.includeSymbols= !this.includeSymbols;
  }

  onChangeLength(value: string){
    const parseValue = parseInt(value);
    if(!isNaN(parseValue)){
      this.length = parseValue;

    }

  }

  onButtonClick(){
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    console.log(`About to generate password 
         Include  Letters :  ${this.includeLetters}
         Include  Numbers : ${this.includeNumbers}
         Include  Symbol : ${this.includeSymbols}
    `);
    
    this.password = 'My password';
  };

 
}
