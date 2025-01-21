import { useState } from "react";

export function NewTask({ isNewTaskOpen, setIsNewTaskOpen, onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form submission
    if (newTask.trim()) {
      onAddTask(newTask);
      setIsNewTaskOpen(!isNewTaskOpen);
      setNewTask("");
    }
  };

  return (
    <div
      className="new-tomato-task"
      style={{ fontFamily: "monospace", fontSize: "1.2rem" }}
    >
      <form onSubmit={handleAddTask}>
        <label id="task">New Todo:</label>
        <input
          style={{
            fontFamily: "monospace",
            fontSize: "2rem",
            width: "400px",
          }}
          id="input"
          type="text"
          placeholder="Do laundry"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="with-text"
          id="submit"
          style={{ fontFamily: "monospace", fontSize: "2rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
