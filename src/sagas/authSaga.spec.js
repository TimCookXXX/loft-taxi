import { recordSaga } from './recordSaga'
import { authenticateSaga } from './authSaga'
import { authenticate } from '../actions'

jest.mock('../api', () => ({ serverLogIn: jest.fn(() => true) }))

describe('AuthSaga', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate('testLogin', 'testpassword')
      )
      expect(dispatched).toEqual([
        {
          type: 'LOG_IN'
        }
      ]) 
    })
  })
})