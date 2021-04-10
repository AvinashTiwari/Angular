import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items =[{title:'Why sky is blue?', content:'Sky is blue becuase it is'},
  {title:'What orange taste as ?', content:'Oranage is orange'}, 
  {title:'What color is cat ?', content:'Cat color is orange'}];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
