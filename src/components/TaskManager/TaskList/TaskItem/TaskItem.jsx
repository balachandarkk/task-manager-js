import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroupItem, Button } from 'reactstrap'

const TaskItem = props => {
    const { task } = props;
    return (
        <ListGroupItem>
            <Link to=''> {task.title} </Link>
            <Button close onClick='' />
        </ListGroupItem>
    )
}

export default TaskItem