import React, { Component } from 'react';
import { harmonyConnectForm } from '../../harmony-redux-react-connect';
import { Link } from 'react-router';
import * as actions from '../actions/actions_user';
import { REGISTER } from '../../../../routes';
import { Cor_Input } from '../../../../components/core';


class Login extends Component {
    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h1>{this.T('login')}</h1>

                <Cor_Input name="email" type="email" label={this.T('email')} />
                <Cor_Input name="password" type="password" label={this.T('password')} />

                {this.props.loginError || ""}
                <br/>

                <button type="submit" className="btn btn-success">{this.T('login')}</button>
                <Link to={REGISTER} style={{float:'right'}} className="btn btn-default">{this.T('register')}</Link>

            </form>
        );

    }

    handleSubmit(props) {
        this.props.login(props);
    }

}


function validate(values) {
    const errors = {};

    if (!values.email) {
        //errors.email = this.T('emailError');
    }

    if (!values.password) {
        errors.password = 'Enter a password';
    }

    return errors;
}


export default harmonyConnectForm(Login,
    (state) => {
        return {
            loginError: state.user.get('loginError')
        }
    },
    {
        login: actions.login
    },
    {
        form : 'LoginForm',
        fields: [],
        validate
    }
);