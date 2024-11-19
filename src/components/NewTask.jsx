import { useState } from "react";

export function NewTask({ isNewTaskOpen, setIsNewTaskOpen, tasks }) {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
    tasks.push(newTask);
  };
  return (
    <div className="new-tomato-task">
      <form>
        <label id="task">New Todo:</label>
        <input
          id="input"
          type="text"
          placeholder="Do laundry"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="with-text" id="submit" onClick={handleAddTask}>
          Submit
        </button>
      </form>
    </div>
  );
}
