import { NoopAnimationPlayer } from '@angular/animations';
import { Component } from '@angular/core';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  detail:any=''
  display=false;
  userdata=[
    {name:'namit',phone:123456},
    {name:'soham',phone:456789},
    {name:'adi',phone:456123}
  ]
  data="";
  getdata(data:NgForm)
  {
    console.warn(data)
    this.detail = data
  }
  toggle()
  {
    this.display===false?this.display=true:this.display=false
  }
  updatedata(item:string)
  {
    console.warn(item)
    this.data = item;
  }
}
