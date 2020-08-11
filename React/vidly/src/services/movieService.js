import http from "./httpService";

const apiEndpoint = 'http://localhost:8000/api/v1/movie/';

export function getMovies() {
    return http.get(apiEndpoint)
}

export function deleteMovies(movieId) {

    http.delete(apiEndpoint + "/" + movieId);
}