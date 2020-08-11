import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + '/movie';

function movieUrl(id){
    return `${apiEndpoint}/${id}/`;
}

export function getMovies() {
    return http.get(apiEndpoint)
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if(movie._id){
        // const body = {...movie};
        // delete body._id;
        return http.put(movieUrl(movie._id), movie)
    }

    return http.post(apiEndpoint,movie)
}

export function deleteMovies(movieId) {

    http.delete(movieUrl(movieId));
}