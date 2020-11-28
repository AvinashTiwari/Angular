import { Component } from '@angular/core';

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
  onChangeUseLetters(){

    this.includeLetters= !this.includeLetters;

  }

  onChangeUseNumbers(){
    this.includeNumbers= !this.includeNumbers;
  }
  onChangeUseSymbols() {

    this.includeSymbols= !this.includeSymbols;
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
