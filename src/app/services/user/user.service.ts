import { Injectable } from '@angular/core'
import { User } from '@models/user'
import { BehaviorSubject, Observable, map } from 'rxjs'
import { Roles } from 'src/app/constants/roles'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #currentUser = new BehaviorSubject<User>({ name: "Martín", role: Roles.Dev })

  get currentUser(): Observable<User> {
    return this.#currentUser.asObservable()
  }

  get currentUserRole(): Observable<Roles> {
    return this.#currentUser.asObservable()
      .pipe(map(user => user.role))
  }

  get currentUserRoleValue(): Roles {
    return this.#currentUser.getValue().role
  }

  setUser(user: User): void {
    this.#currentUser.next(user)
  }

  setName(name: string): void {
    const currentUser = this.#currentUser.getValue()
    this.#currentUser.next({ ...currentUser, name })
  }

  setRole(role: Roles): void {
    const currentUser = this.#currentUser.getValue()
    this.#currentUser.next({ ...currentUser, role })
  }
}
