import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { User } from '@models/user'
import { UserService } from '@services/user/user.service'
import { catchError, map, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  userService = inject(UserService)

  auth(user: string, password: string) {
    return this.http.post<HttpResponse<User>>('', {
      user, password
    })
      .pipe(
        catchError(this.#handleError),
        map(resp => resp.body)
      )
      .subscribe((data) => { this.userService.setUser(data!) })
  }

  #handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error)
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error)
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }
}
