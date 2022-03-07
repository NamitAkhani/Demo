import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transfar',
  templateUrl: './transfar.component.html',
  styleUrls: ['./transfar.component.css']
})
export class TransfarComponent implements OnInit {

  constructor() { }
@Output() updatedataEvent =new EventEmitter<string>();
  ngOnInit(): void {
  }

}
