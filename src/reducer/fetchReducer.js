import { FETCH_PEOPLE, FETCH_PLANETS, RESET, PLAYER_LOG, SET_PLAYERS } from "../actions/types"

const initialState = {
    people: [],
    planets: [],
    log: [],
    players: 1,
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            }
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