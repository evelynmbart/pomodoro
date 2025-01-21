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
    <div className="new-tomato-task">
      <form onSubmit={handleAddTask}>
        <label id="task">New Todo:</label>
        <input
          id="input"
          type="text"
          placeholder="Do laundry"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="with-text" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
