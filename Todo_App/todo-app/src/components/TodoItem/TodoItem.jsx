import { useState } from "react";

function TodoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim() === "") return;

    onEdit(task.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          style={{
            flex: 1,
            textDecoration: task.completed
              ? "line-through"
              : "none",
          }}
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <>
          <button onClick={handleSave}>
            Save
          </button>

          <button onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;