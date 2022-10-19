import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs'
import { NormalizeStringPipe } from '../pipes/normalize-string.pipe';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public users$: Observable<User[]>

  constructor(private normalizeString: NormalizeStringPipe) {
    this.users$ = this._users.asObservable()
  }

  getUserById(id: string): User | undefined {
    return this._users.value.find(user => user.id === id)
  }

  addUser(payload: User): void {
    const userIdx = this._users.value.findIndex(user => user.id === payload.id)
    if (userIdx >= 0) {
      this._users.value.splice(userIdx, 1, payload)
    } else {
      this._users.value.push(payload)
    }
  }

  searchUserByName(name: string): Observable<User[]> {
    if (!name) return this.users$
    const filteredUsers = this._users.value.filter(user => {
      const pipe = this.normalizeString
      return pipe.transform(user.name).includes(pipe.transform(name))
    })
    return of(filteredUsers)
  }
}
