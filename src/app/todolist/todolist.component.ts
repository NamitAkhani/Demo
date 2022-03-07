import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  list:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  addtask(item:string,item1:string){
      
      this.list.push({id:this.list.length,name:item,user:item1});
      console.warn(this.list)
  }
  remove(id:number)
  {
    this.list = this.list.filter(item=>item.id!=id)
  }

}
