export function Header(props) {
  const { todos } = props;
  const todoLength = todos.length;

  const isTasksPlural = todos.length !== 1;

  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header className="text-gradient">
      <h1>
        You have {todoLength} {taskOrTasks}.
      </h1>
    </header>
  );
}
