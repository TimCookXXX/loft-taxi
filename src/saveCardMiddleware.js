import { showCardData } from '../src/actions'
import { serverSaveCard } from './api'
import { SAVE_CARD } from '../src/actions'

export const saveCardMiddleware = (store) => (next) => async (action) => {
    if (action.type === SAVE_CARD) {
        const {
            cardNumber,
            cardName,
            expiryDate,
            cvc,
            token
        } = action.payload;

        const success = await serverSaveCard({ 
            cardNumber,
            cardName,
            expiryDate,
            cvc,
            token
        });

        if (success) {
            store.dispatch(showCardData({ 
                cardNumber,
                cardName,
                expiryDate,
                cvc
            }))
        }
    } else {
        next(action)
    }
}