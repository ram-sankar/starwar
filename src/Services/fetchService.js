import http from './httpService';
const urlPeople = '/people/';
const urlPlanet = '/planets/'

export function getPeople(id) {
    return http.get(urlPeople + id + '/');
}

export function getPlanet(id) {
    return http.get(urlPlanet + id + '/');
}

export default {
    getPeople,
    getPlanet
}