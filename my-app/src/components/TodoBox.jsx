import React from 'react'
import TodoItem from "./TodoItem"
import uniqueId from './../../node_modules/lodash/uniqueId'

class TodoBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            valueInput: ''
        }
    }

    onChangeTodoValue = ({target}) => {
        this.setState({valueInput: target.value});
    }

    addTodoItem = (event) =>{
        event.preventDefault();
        const todoItem = {
            id: uniqueId(),
            value: this.state.valueInput
        }

        this.setState({valueInput: '', todos:[todoItem, ...this.state.todos] });
    }

    handleRemoveItem = (id) => (event) => {
        event.preventDefault();
        const newTodos = this.state.todos.filter((item) => item.id !== id);

        this.setState({ todos : newTodos });
    }

    render() {
        return(
            <div>
                <div className="mb-3">
                    <form  onSubmit={this.addTodoItem} className="d-flex justify-content-center">
                        <div className="me-3">
                            <input onChange={this.onChangeTodoValue}
                                   type="text"
                                   value={this.state.valueInput}
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."
                            />
                        </div>

                        <button type="submit"
                                className="btn btn-primary"
                        >add</button>
                    </form>
                </div>

                {this.state.todos.map((item) => (
                    <TodoItem key={item.id}
                              onRemove={this.handleRemoveItem}
                              item={item}
                    />
                ))}

            </div>
        )
    }
}

export default TodoBox;
