import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { IPerson } from './person';
import { IChild } from './child';

@Injectable()
export class PersonsService {
    private _personsUrl = 'http://assignment.siteimprove.com/api/persons';
    private _childrenBaseUrl = 'http://assignment.siteimprove.com/api/persondetails/';

    constructor(private _http: Http) { }

// Get persons list
    getPersons(): Observable<IPerson[]> {
        return this._http.get(this._personsUrl)
            .map((response: Response) => <IPerson[]> response.json())
            .catch(this.handleError);
    }

// Get person's detail list
    getPerson(id: number): Observable<IChild[]> {
        return this._http.get(this._childrenBaseUrl+id)
            .map((response: Response) => <IChild[]> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
