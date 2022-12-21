import { GET_ADDRESSES_STATE, SAVE_ROUTE, CLOSE_MODAL } from "../actions";

const initialState = { addresses: [], route: [] };

export default function addressesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ADDRESSES_STATE: {
            return { ...state, addresses: [...action.payload] };
        }
        case SAVE_ROUTE: {
            return { ...state, route: [...action.payload]};
        }
        case CLOSE_MODAL: {
            return { ...state, route: [] }
        }
        default:
            return state;
    }
}