import React, { Component } from "react";
import "./App.css";
import http from './services/httpService';
import config from "./config.json";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const {data: posts} = await http.get(config.apiEndPoint);
      this.setState({ posts })
  };

  handleAdd = async () => {
    const obj = { title:"a", body:"b"};
    const {data: post} = await http.post(config.apiEndPoint, obj)
    
    const posts = [post,...this.state.posts];
    this.setState({posts});
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    await http.put(config.apiEndPoint + '/' + post.id, post);
    
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post};
    this.setState({ posts })
  };

  handleDelete = async post => {

    const orginalPosts = this.state.posts;
    
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try{
      await http.delete('s' + config.apiEndPoint + '/999' + post.id);
      // console.log("Deleted");

    } catch (ex) {
      console.log("HANDLE DELETE CATCH BLOCK");
      //Expected (404: not found, 400: bad request) - Client Errors
      // - Display specific error message
      //
      if (ex.response && ex.response.status === 404)
        alert('This post has aleardy been deleted.');
      else {
        
      }
      //Unexpected(network down, server down, db down, bug)
      // - Log them
      // - Display a generic and friendly error message
      this.setState({posts: orginalPosts});
    }
    
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button className="btn btn-info btn-sm" onClick={() => this.handleUpdate(post)}>
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(post)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
