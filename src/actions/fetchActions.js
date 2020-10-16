import { FETCH_PEOPLE, FETCH_PLANETS, RESET, PLAYER_LOG, SET_PLAYERS } from "./types"
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

export function setPlayers(data) {
    return async function (dispatch) {
        dispatch({
            type: SET_PLAYERS,
            payload: data
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

export function reset() {
    return async function (dispatch) {
        dispatch({
            type: RESET
        })
    }
}

export default {
    fetchPeople,
    fetchPlanet,
    playerLog,
    setPlayers,
    reset
};