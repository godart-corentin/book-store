import {User} from '.'
import {myUser} from './data'

export class UserService {
  /**
   * Get current user data
   */
  static getCurrentUser(): User {
    return myUser
  }
}
