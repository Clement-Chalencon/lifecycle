import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef } from '@angular/core';
import { AppService } from '../app-service/app-service.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  itemList: any[] = [];
  numberOfItems;

  isCloudy = true;

  @ViewChild(FooterComponent) footer: FooterComponent;
  @ViewChild('mainDiv') mainDiv: ElementRef;

  constructor(private appService: AppService) { }

  addItemList(item: any) {
    this.appService.addItems(item);
    this.numberOfItems = this.itemList.length;
  }

  deleteItem(item: any) {
    this.itemList = this.itemList.filter((itm: any) => itm.id !== item.id);
    this.numberOfItems = this.itemList.length;
  }

  onDisplayClouds(clouds: boolean) {
    this.isCloudy = clouds;
  }

  /* ----------------------------- lifecycle hooks ---------------------------- */

  ngOnInit(): void {
    this.appService.items.subscribe((data) => {
      this.itemList.push(data);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      try {
        this.footer.numberOfItems = this.itemList.length;
      } catch (error) { }
    });
    console.log(this.mainDiv.nativeElement);
  }

  ngAfterViewChecked(): void {
    // setTimeout(() => {
    //   try {
    //     this.footer.numberOfItems = this.itemList.length;
    //   } catch (error) {
    //     console.log('footer is undefined !');
    //   }
    // });
  }

  ngOnDestroy() {
    this.appService.items.unsubscribe();
  }

}
