import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Stats from "../Stats/Stats";
import Filter from "../Filter/Filter";

function Todo() {
  const [input, setInput] = useState("");

  // Load tasks from localStorage on first render
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");

    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Filter tasks
  let filteredTasks = tasks;

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  // Add Task
  const handleAddTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInput("");
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Toggle Complete
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  // Edit Task
  const handleEditTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
            }
          : task
      )
    );
  };

  return (
    <>
      <h1>Todo App</h1>

      <TodoForm
        input={input}
        setInput={setInput}
        onAddTask={handleAddTask}
      />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggle}
        onEdit={handleEditTask}
      />

      <Stats tasks={tasks} />
    </>
  );
}

export default Todo;