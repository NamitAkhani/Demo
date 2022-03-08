import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  userlogin(item:any)
  {
    console.warn(item)
  }

}
