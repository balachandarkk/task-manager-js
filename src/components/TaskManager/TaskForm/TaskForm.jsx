import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'


class TaskForm extends Component {

    state = {
        title: '',
        description: '',
        titleErr: '',
        descriptionErr: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {title, description} = this.state;

        let valid = true;

        if(title === ''){
            this.setState({
                titleErr: 'The title should not be empty'
            })
            valid = false
        }

        if(description === ''){
            this.setState({
                descriptionErr: 'The description should not be empty'
            })
            valid = false
        }

        if(valid){
            const data = {
                title,
                description
            }
            
            this.props.addTask(data);

            this.setState({
                title: '',
                description: '',
                titleErr: '',
                descriptionErr: ''
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name + 'Err']: '' 
        })
    }

    render() {
        const {title, description, titleErr, descriptionErr} = this.state;
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input 
                        type="text" 
                        name="title"
                        value={title} 
                        onChange={this.handleChange} 
                    />
                    <span id="titleErr" style={{ color: 'red', fontSize: '12px' }}>
                        {titleErr}
                    </span>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input 
                        type="textarea" 
                        name="description" 
                        value={description} 
                        onChange={this.handleChange} 
                        rows="5"
                    />
                    <span id="descriptionErr" style={{ color: 'red', fontSize: '12px' }}>
                        {descriptionErr}
                    </span>
                </FormGroup>

                <Button color="primary">Add</Button>
            </Form>
        )
    }
}


export default TaskForm