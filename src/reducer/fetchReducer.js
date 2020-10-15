import { FETCH_PEOPLE, FETCH_PLANETS, RESET } from "../actions/types"

const initialState = {
    people: [],
    planets: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        case FETCH_PLANETS:
            return {
                ...state,
                planets: [...state.planets, action.payload]
            }
        case RESET:
            return {
                ...state,
                planets: [],
                people: []
            }
        default:
            return state;
    }
}