import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + '/movie';

export function getMovies() {
    return http.get(apiEndpoint)
}

export function getMovie(movieId) {
    return http.get(apiEndpoint + "/" + movieId)
}

export function saveMovie(movieId) {}

export function deleteMovies(movieId) {

    http.delete(apiEndpoint + "/" + movieId);
}