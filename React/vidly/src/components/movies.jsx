import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService"
import Like from "./common/like"
import Pagination from "./common/pagination"

class Movies extends Component {
    state = {   
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
      }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: movies})
    };

    handleLike =(movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })

    };


    handlePageChange = page => {
        this.setState({currentPage: page})
    }



    render() { 
        const {length: count} = this.state.movies

        if(count === 0)
            return (<p>There are no movies in database</p>);
        return ( 
        <React.Fragment>
        <p>Showing {count} movies in database</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like
                    onClick={() => this.handleLike(movie)}
                    liked={movie.liked} 
                    />
                    </td>
                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>

                ))}
            </tbody>
        </table> 
        <Pagination 
        itemCount={count} 
        pageSize={this.state.pageSize}
        currentPage={this.state.currentPage} 
        onPageChanged={this.handlePageChange} 
        />
        </React.Fragment>
        );
    }
}
 
export default Movies;