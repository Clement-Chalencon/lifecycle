import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit, AfterContentChecked, AfterContentInit {
  @ContentChild(ErrorMessageComponent) errorMessage: ErrorMessageComponent;

  numberOfAttempts = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // console.log('------ngAfterContentInit-----');
    // console.log(this.errorMessage.message);
    this.errorMessage.message = this.errorMessage.message.toUpperCase();
  }

  ngAfterContentChecked(): void {
    this.numberOfAttempts = this.errorMessage.numberOfAttempts;
    const date = new Date();
    this.errorMessage.time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }
}
