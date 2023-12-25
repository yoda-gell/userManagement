import { Component ,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
}
