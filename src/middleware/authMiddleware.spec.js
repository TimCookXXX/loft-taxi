import { authMiddleware } from './authMiddleware'
import { authenticate } from '../actions'
import { serverLogIn } from '../api'

jest.mock('../api', () => ({serverLogIn: jest.fn(() => true)}))

describe('authMiddleware', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatch = jest.fn()

      await authMiddleware({dispatch})()(
        authenticate('testlogin', 'testpassword')
      )

      expect(serverLogIn).toBeCalledWith('testlogin', 'testpassword')
      expect(dispatch).toBeCalledWith({
        type: 'LOG_IN'
      })
    })
  })
})