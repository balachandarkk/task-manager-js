import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'reactstrap';

import FormControl from '../Login/FormControl';


class Login extends Component {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {},
        test: {}
    }

    validate = () => {
        const {data} = this.state;
        const errors = {}

        if (data.username === '') errors.username = 'Username should not be empty';
        if (data.password === '') errors.password = 'Password should not be empty';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate();
        
        if(Object.keys(errors).length === 0){
            console.log(this.state.data)
            this.setState({
                data: {
                    username: '',
                    password: '' 
                },
                error: {}
            })
        } else {
            this.setState({
                errors
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id] : e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.id]: ''
            }
        })
    }

    render() {
        const {data, errors} = this.state;
        return (
            <Row>
                <Col md={4}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormControl 
                            type="text" 
                            label="username" 
                            value={data.username}
                            handleChange={this.handleChange}
                            error={errors.username} 
                        />
                        <FormControl 
                            type="password" 
                            label="password" 
                            value={data.password}
                            handleChange={this.handleChange}
                            error={errors.password} 
                        />
                        <Button color="primary">Login</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Login;