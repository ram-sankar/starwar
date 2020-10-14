import { FETCH_PEOPLE } from "./types"
import { getPeople } from '../Services/fetchService';

export function fetchPeople(data) {
    return async function (dispatch) {
        const res = await getPeople(data)
        dispatch({
            type: FETCH_PEOPLE,
            payload: res
        })
    }
}

export default {
    fetchPeople
};