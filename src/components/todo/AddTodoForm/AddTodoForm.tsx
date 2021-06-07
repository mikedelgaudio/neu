import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/todoSlice';

const AddTodoForm = () => {
  const [value, setValue] = useState<string>();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} className="todo__add--container">
      <input
        type="text"
        className="todo__add--input"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit" className="todo__add--btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
