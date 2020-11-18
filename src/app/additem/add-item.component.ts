import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });


  itemList: string[] = ['sample project', 'todo list'];
  numberOfAttempts = 0;
  showError = false;
  @Output() itemOut = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.showError = false;
      this.itemOut.emit(this.itemForm.value);
      this.itemForm.reset();
      this.numberOfAttempts = 0
    } else {
      this.numberOfAttempts++
      this.showError = true;
    }
  }


}
