import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + '/movie';

export function getMovies() {
    return http.get(apiEndpoint)
}

export function getMovie(movieId) {
    return http.get(apiEndpoint + "/" + movieId)
}

export function saveMovie(movie) {
    if(movie._id){
        // const body = {...movie};
        // delete body._id;
        return http.put(apiEndpoint + "/" + movie._id + "/",movie)
    }

    return http.post(apiEndpoint,movie)
}

export function deleteMovies(movieId) {

    http.delete(apiEndpoint + "/" + movieId);
}