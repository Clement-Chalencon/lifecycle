import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app-service/app-service.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() item: any;
  @Output() deleteOut = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  editItem(item: any) {
  }

  delectedItem(item: any): void {
    this.deleteOut.emit(item);
  }
}
