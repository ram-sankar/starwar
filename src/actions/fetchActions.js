import { FETCH_PEOPLE, FETCH_PLANETS, RESET } from "./types"
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
    reset
};