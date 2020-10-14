import { FETCH_PEOPLE } from "../actions/types"

const initialState = {
    people: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        default:
            return state;
    }
}