import styles from "./TodoForm.module.css";

function TodoForm({ input, setInput, onAddTask }) {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onAddTask();
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
