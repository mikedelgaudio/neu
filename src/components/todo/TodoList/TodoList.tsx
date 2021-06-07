import { RootStateOrAny, useSelector } from 'react-redux';
import TodoItem from './TodoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector((state: RootStateOrAny) => state.todos);
  return (
    <ul className="todo__list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
