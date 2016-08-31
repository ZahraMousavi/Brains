import { Component, OnInit, Input } from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

import { IChild } from './child';
import { PersonsService } from './persons.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector:'personDetail',
    templateUrl: 'app/persons/person-detail.component.html',
    styleUrls: ['app/persons/person-detail.component.css'],    
    directives: [SpinnerComponent]
})
export class PersonDetailComponent implements OnInit{

// Initialize variables
  children: IChild[];
  errorMessage: string;
  showSpinner: boolean = true;@Input() id: number;

  constructor(private _personsService: PersonsService) {}

// Subscribe for person's detail list on initiation of the component
  ngOnInit(): void {
    this._personsService.getPerson(this.id)
      .subscribe(
        personDetail => this.children = personDetail,
        error => this.errorMessage = < any > error);

// Add 3sec. deliberate delay before first row of data is loading
    if (this.id === 1) {
      TimerWrapper.setTimeout(() => {
        this.showSpinner = false;
      }, 3000);
    } else {
      this.showSpinner = false;
    }
  }
}