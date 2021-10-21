import {User} from '.'
import {fakeUser} from './fakeData'

export class UserService {
  /**
   * Get current user data
   */
  static getCurrentUser(): User {
    return fakeUser
  }
}
