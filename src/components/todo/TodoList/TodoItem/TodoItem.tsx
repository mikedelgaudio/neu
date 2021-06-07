const TodoItem = ({ id, title, completed }) => {
  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className="">
        <span className="">
          <input type="checkbox" className="" checked={completed} onChange={() => {}}></input>
          {title}
        </span>
        <button className="">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
