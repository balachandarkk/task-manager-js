import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

const TaskDetail = ({ match }) => {

    return (
        <Card>
            <CardHeader>
                <h3>task title</h3>
            </CardHeader>

            <CardBody>
                <p> task description </p>
                <p>
                    <Link to="/tasks">Back to Tasks</Link>
                </p>
            </CardBody>
        </Card>
    )
}

export default TaskDetail