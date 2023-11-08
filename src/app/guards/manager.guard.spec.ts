import { TestBed } from '@angular/core/testing'
import { CanActivateFn, Route, Router, provideRouter } from '@angular/router'

import { Component } from '@angular/core'
import { RouterTestingHarness } from '@angular/router/testing'
import { Roles } from '@constants/roles'
import { User } from '@models/user'
import { UserService } from '@services/user/user.service'
import { managerGuard } from './manager.guard'

@Component({ standalone: true, template: "" })
class MockComponent { }

describe('managerGuard', () => {
  let service: UserService
  let routes: Route[] = []

  const devUser: User = {
    name: "Mercedes",
    role: Roles.Dev
  }

  const managerUser: User = {
    name: "Mercedes",
    role: Roles.Manager
  }

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => managerGuard(...guardParameters))

  beforeEach(() => {
    routes = [
      {
        path: 'manager',
        canActivate: [managerGuard],
        component: MockComponent
      },
      {
        path: 'all',
        component: MockComponent
      },
    ]

    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes)
      ]
    })
    service = TestBed.inject(UserService)
  })

  it('should be created', () => {
    expect(executeGuard)
      .toBeTruthy()
  })

  it('should allow managers and devs', (done: DoneFn) => {

    RouterTestingHarness.create('all')
      .then(() => {
        service.setUser(devUser)
        expect(TestBed.inject(Router).url)
          .toEqual('/all')
      }
      )
      .then(() => {
        service.setUser(managerUser)
        expect(TestBed.inject(Router).url)
          .toEqual('/all')
      })
    done()
  })

  it('should allow managers', (done: DoneFn) => {
    service.setUser(managerUser)

    RouterTestingHarness.create('manager')
      .then(() =>
        expect(TestBed.inject(Router).url)
          .toBe('/manager')
      )
    done()
  })

  it('should not allow devs', (done: DoneFn) => {
    service.setUser(devUser)
    RouterTestingHarness.create('manager')
      .then(() =>
        expect(TestBed.inject(Router).url)
          .not.toBe('/manager')
      )
    done()
  })
})

/**
 * https://medium.com/ngconf/functional-route-guards-in-angular-8829f0e4ca5c
 */
