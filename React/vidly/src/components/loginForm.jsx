import React, { Component } from 'react';


class LoginForm extends Component {
    state = {
        account: { username: '', password: ''}
    }

    handleSubmit = e => {
        e.preventDefault();

        //Call the Server
        console.log('Submitted');
    };

    handleChange = e => {
        const account = { ...this.state.account };
        account.username = e.currentTarget.value;
        this.setState({ account });
    };

    render() { 
        return (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <lable htmlFor="username">Username</lable>
                <input autoFocus value={this.state.account.username} onChange={this.handleChange} id="username" type="text" className="form-control" type="text" />
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