import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { UserComponent } from './components/layout/user/user.component'

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // HINT: Here you have to import all dependencies
    imports: [RouterTestingModule, UserComponent],
    declarations: [AppComponent]
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app)
      .toBeTruthy()
  })

  it(`should have as title 'TDD Playground'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title)
      .toEqual('TDD Playground')
  })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.nativeElement as HTMLElement
  //   expect(compiled.querySelector('.content span')?.textContent)
  //     .toContain('tdd-pground app is running!')
  // })
})
