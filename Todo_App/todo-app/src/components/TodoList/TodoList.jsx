import TodoItem from "../TodoItem/TodoItem";

function TodoList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;