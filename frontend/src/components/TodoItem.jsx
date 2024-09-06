import React from "react";

function TodoItem({ todo, deleteTodo }) {
  return (
    <div style={styles.todoItem}>
      <span>{todo.task}</span>
      <button style={styles.deleteButton} onClick={() => deleteTodo(todo._id)}>
        Delete
      </button>
    </div>
  );
}

const styles = {
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default TodoItem;
