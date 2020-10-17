import { FETCH_PEOPLE, FETCH_PLANETS, PLAYER_LOG, RESET_FETCH_ACTION } from "../actions/types"

const initialState = {
    people: [],
    planets: [],
    log: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case PLAYER_LOG:
            return {
                ...state,
                log: [action.payload, ...state.log]
            }
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
        case RESET_FETCH_ACTION:
            return {
                ...state,
                people: [],
                planets: []
            }
        default:
            return state;
    }
}