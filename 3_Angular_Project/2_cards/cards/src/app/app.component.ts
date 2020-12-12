import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 post = [
   {title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username : 'nature',
    content: 'I saw this tree today'
  } ,
  {title: 'Snowy Moutian',
  imageUrl: 'assets/mountain.jpeg',
  username : 'mountainlover',
  content: 'Here is picture of snowy mountain.'
} ,
{title: 'Moutain Biking',
imageUrl: 'assets/biking.jpeg',
username : 'biking12222',
content: 'I did some biking today'
} 
 ];

}
