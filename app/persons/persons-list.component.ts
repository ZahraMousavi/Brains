import { Component, OnInit }  from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

import { IPerson } from './person';
import { PersonDetailComponent } from './person-detail.component';
import { PersonsService } from './persons.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    templateUrl: 'app/persons/persons-list.component.html',
    styleUrls: ['app/persons/persons-list.component.css'],
    directives: [SpinnerComponent, 
                 PersonDetailComponent]
})
export class PersonsListComponent implements OnInit {

// Initialize variables
  showSpinner: boolean = true;
  pageTitle: string = 'Brains List';
  errorMessage: string;
  persons: IPerson[];
  showDetail: boolean[] = [false];

  constructor(private _personsService: PersonsService) {
  }

// Subscribe for persons list on initiation of the component
    ngOnInit(): void {
    this._personsService.getPersons()
      .subscribe(
        persons => this.persons = persons,
        error => this.errorMessage = < any > error);

// Add 3sec. deliberate delay before data is loading
    TimerWrapper.setTimeout(() => {
      this.showSpinner = false;
    }, 3000);

  }

// Show/hide detail table 
    toggleShow(i: number): void {
    if(!this.showDetail[i])this.showDetail.fill(false);
    this.showDetail[i] = !this.showDetail[i];
  }

}