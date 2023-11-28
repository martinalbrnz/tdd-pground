import { TestBed } from '@angular/core/testing'

import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { UserService } from '@services/user/user.service'
import { AuthService } from './auth.service'

describe('AuthService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: AuthService

  // const okResponse: HttpResponse<User> = new HttpResponse<User>({
  //   body: { name: 'Marcos', role: Roles.Manager },
  //   status: 200
  // })

  const errorResponse: HttpErrorResponse = new HttpErrorResponse({
    error: 'Wrong credentials',
    status: 400
  })

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    TestBed.configureTestingModule({
      imports: [
        httpClientSpy
      ],
      providers: [UserService]
    })
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service)
      .toBeTruthy()
  })

  it('should throw if error', (done: DoneFn) => {

    done()
  })

  it('should set the user if it exists', (done: DoneFn) => {
    // httpClientSpy.post.and.returnValue(fakeAsync(okResponse))
    done()
  })
})
