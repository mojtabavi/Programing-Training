import React, { Component } from 'react';


class LoginForm extends Component {
    username = React.createRef();

    handleSubmit = e => {
        e.preventDefault();

        const username = this.username.current.value;
        //Call the Server
        console.log('Submitted');
    };



    render() { 
        return (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <lable htmlFor="username">Username</lable>
                <input autoFocus ref={this.username} id="username" type="text" className="form-control" type="text" />
                <small></small>
              </div>
              <div className="form-group">
                <lable htmlFor="password">Password</lable>
                <input id="password" type="password" className="form-control" type="text" />
                <small></small>
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        );
    }
}
 
export default LoginForm;