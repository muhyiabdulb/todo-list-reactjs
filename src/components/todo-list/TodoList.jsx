import './TodoList.jsx'
import { Table, Button } from 'react-bootstrap';
import React from 'react';

class TodoList extends React.Component {
    render() {
        console.log(this.props.dataTodos)
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    // looping
                    this.props.dataTodos.map((todo, index) => {
                        // { id: 1, title: 'Makan' },
                        return(
                            <tr key={todo.id}>
                                <td>{index + 1}</td>
                                <td>{todo.title}</td>
                                <td>{todo.date}</td>
                                <td>
                                    <Button variant="danger" type="submit" onClick={() => this.props.click(index)}>delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>           
        )
    }
}

export default TodoList