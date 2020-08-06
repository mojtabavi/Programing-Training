import React, { Component } from 'react';
import Input from './common/input';


class LoginForm extends Component {
    state = {
        account: { username: '', password: ''}
    }

    handleSubmit = e => {
        e.preventDefault();

        //Call the Server
        console.log('Submitted');
    };

    handleChange = ({currentTarget: input}) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    };

    render() { 
        const { account } = this.state;
        return (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <Input name="username" onChange={this.handleChange} label="Username" value={account.username} />
              <Input name="password" onChange={this.handleChange} label="Password" value={account.password} />
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        );
    }
}
 
export default LoginForm;