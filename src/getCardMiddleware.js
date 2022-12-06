import { showCardData } from '../src/actions'
import { serverGetCard } from './api'
import { GET_CARD } from '../src/actions'

export const getCardMiddleware = (store) => (next) => async (action) => {
    if (action.type === GET_CARD) {
        const { token } = action.payload;
        const data = await serverGetCard(token);
        if (data.cardNumber) {
            store.dispatch(showCardData(data))
        }
    } else {
        next(action)
    }
}