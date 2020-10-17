import { RESET_SET_ACTION, SET_PLAYERS, SET_SELECTED_PERSON, SET_SELECTED_PLANET } from "./types"

export function setPlayers(data) {
    return async function (dispatch) {
        dispatch({
            type: SET_PLAYERS,
            payload: data
        })
    }
}
export function setSelectedPerson(data) {
    return async function (dispatch) {
        dispatch({
            type: SET_SELECTED_PERSON,
            payload: data
        })
    }
}
export function setSelectedPlanet(data) {
    return async function (dispatch) {
        dispatch({
            type: SET_SELECTED_PLANET,
            payload: data
        })
    }
}

export function resetSetActions() {
    return async function (dispatch) {
        dispatch({
            type: RESET_SET_ACTION
        })
    }
}

export default {
    setPlayers,
    setSelectedPerson,
    setSelectedPlanet,
    resetSetActions
};