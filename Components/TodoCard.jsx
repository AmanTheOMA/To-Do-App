export function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, handleEditTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div>
        <button
          disabled={todo.complete}
          onClick={() => {
            handleEditTodo(todoIndex);
          }}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
