import { RESET_SET_ACTION, SET_PLAYERS, SET_SELECTED_PERSON, SET_SELECTED_PLANET } from "../actions/types"

const initialState = {
    players: 2,
    selectedPerson: '',
    selectedPlanet: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            }
        case SET_SELECTED_PERSON:
            return {
                ...state,
                selectedPerson: action.payload
            }
        case SET_SELECTED_PLANET:
            return {
                ...state,
                selectedPlanet: action.payload
            }
        case RESET_SET_ACTION:
            return {
                ...state,
                selectedPlanet: '',
                selectedPerson: '',
                players: 2
            }
        default:
            return state;
    }
}