import { TestBed } from '@angular/core/testing'

import { Roles } from '@constants/roles'
import { User } from '@models/user'
import { UserService } from './user.service'

describe('UserService', () => {
  let service: UserService
  const initialValue: User = {
    name: 'Patricio',
    role: Roles.Dev
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserService)
    service.setUser(initialValue)
  })

  it('should be created', () => {
    expect(service)
      .toBeTruthy()
  })

  it('should return observed value', (done: DoneFn) => {
    service.currentUser.subscribe(val => {
      expect(val)
        .toEqual({ name: initialValue.name, role: initialValue.role })
      done()
    })
  })

  it('should change user name', (done: DoneFn) => {
    service.setName('Marcos')
    service.currentUser.subscribe(val => {
      expect(val)
        .toEqual({ name: "Marcos", role: initialValue.role })
      done()
    })
  })

  it('should change user role', (done: DoneFn) => {
    service.setRole(Roles.Manager)
    service.currentUser.subscribe(val => {
      expect(val)
        .toEqual({ name: initialValue.name, role: Roles.Manager })
      done()
    })
  })
})
