import { useState } from "react";
import { AddTaskButton } from "./Buttons/AddTaskButton";
import { Deck } from "./Deck";
import { NewTask } from "./NewTask";

export function Tasks() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="tasks-container">
      <div className="tomato-tasks-container">
        {isNewTaskOpen ? (
          <NewTask
            isNewTaskOpen={isNewTaskOpen}
            setIsNewTaskOpen={setIsNewTaskOpen}
            onAddTask={handleAddTask}
          />
        ) : (
          <Deck tasks={tasks} onRemove={handleRemoveTask} />
        )}
      </div>
      <div style={{ display: isNewTaskOpen ? "none" : "block" }}>
        <AddTaskButton handleClick={handleClick} />
      </div>
    </div>
  );
}
