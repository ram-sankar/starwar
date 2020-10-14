import http from './httpService';
const url = '/people/'

export function getPeople(id) {
    return http.get(url + id + '/');
}

export function getStarShip(id) {
    return http.get(url + id + '/');
}

export default {
    getPeople,
    getStarShip
}