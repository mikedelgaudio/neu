import { Component } from 'react';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoList from './TodoList/TodoList';
import TotalCompleteItems from './TotalCompleteItems/TotalCompleteItems';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="todo__container">
        <h1>Here's what to do</h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    );
  }
}

export default Todo;
