import { EXAMPLE_CASE } from '../actions';

const initialState = []

export default function(state = initialState, action) {
    switch (action.type){
        case EXAMPLE_CASE:
            return [action.payload.data, ...state]
        default:
            return state
    }
}
