import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() numberOfItems: number;

  order = 0;

  constructor() {
    this.order++;
    // console.log(this.order + ': contrsuctor from footer');
  }

  /* ----------------------------- LifeCycle Hooks ---------------------------- */

  ngOnChanges(): void {
    this.order++;
    // console.log(this.order + ': OnChanges from footer');
  }

  ngOnInit(): void {
    this.order++;
    // console.log(this.order + ': OnInit from footer');
  }

  ngDoCheck(): void {
    this.order++;
    // console.log(this.order + ': Docheck from footer');
  }

  ngAfterContentInit(): void {
    this.order++;
    // console.log(this.order + ': AfterContentInit from footer');
  }

  ngAfterContentChecked(): void {
    this.order++;
    // console.log(this.order + ': AfterContentChecked from footer');
  }

  ngAfterViewInit(): void {
    this.order++;
    // console.log(this.order + ': AfterViewInit from footer');
  }

  ngAfterViewChecked(): void {
    this.order++;
    // console.log(this.order + ': AfterViewChecked from footer');
  }

  ngOnDestroy(): void {
    this.order++;
    // console.log(this.order + ': OnDestroy from footer');
  }



}
