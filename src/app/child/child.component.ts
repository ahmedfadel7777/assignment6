import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() userNameFromParent: string = ''

  @Output() child = new EventEmitter()
  
  eventChild(){
    this.child.emit('Msg from child to parent')
  }

}
