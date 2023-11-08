import { inject } from '@angular/core'
import { CanActivateFn } from '@angular/router'
import { Roles } from '@constants/roles'
import { UserService } from '@services/user/user.service'

export const managerGuard: CanActivateFn = () => {
  const userService = inject(UserService)
  const allowedRoles: Roles[] = [Roles.Manager]

  if (allowedRoles.includes(userService.currentUserRoleValue)) return true
  return false
}
