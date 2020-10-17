import { FETCH_PEOPLE, FETCH_PLANETS, PLAYER_LOG, RESET_FETCH_ACTION } from "./types"
import { getPeople, getPlanet } from '../Services/fetchService';

export function fetchPeople(data) {
    return async function (dispatch) {
        const res = await getPeople(data)
        dispatch({
            type: FETCH_PEOPLE,
            payload: res
        })
    }
}

export function fetchPlanet(data) {
    return async function (dispatch) {
        const res = await getPlanet(data)
        dispatch({
            type: FETCH_PLANETS,
            payload: res
        })
    }
}

export function playerLog(data) {
    return async function (dispatch) {
        dispatch({
            type: PLAYER_LOG,
            payload: data
        })
    }
}

export function resetFetchAction() {
    return async function (dispatch) {
        dispatch({
            type: RESET_FETCH_ACTION
        })
    }
}

export default {
    fetchPeople,
    fetchPlanet,
    playerLog,
    resetFetchAction
};