import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';


class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    //Call the Server
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input name="username" onChange={this.handleChange} label="Username" value={data.username} error={errors.username} />
          <Input name="password" onChange={this.handleChange} label="Password" value={data.password} error={errors.password} />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
 
export default LoginForm;