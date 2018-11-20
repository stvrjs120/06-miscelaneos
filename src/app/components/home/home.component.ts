import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-clases></app-clases>

    <p [appResaltado]="'orange'">Hola Mundo</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
  }

}
