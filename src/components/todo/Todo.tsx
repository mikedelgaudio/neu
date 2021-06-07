import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoList from './TodoList/TodoList';
import TotalCompleteItems from './TotalCompleteItems/TotalCompleteItems';
import './Todo.scss';

const Todo = () => {
  return (
    <div className="todo__container">
      <h1 className="todo--header">Here's what to do</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default Todo;
