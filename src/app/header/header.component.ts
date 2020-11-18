import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isCloudy = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: MatSlideToggleChange) {
    this.isCloudy.emit($event.checked);
  }

}
