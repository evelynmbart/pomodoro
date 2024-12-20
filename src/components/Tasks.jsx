import { useState } from "react";
import { AddTaskButton } from "./Buttons/AddTaskButton";
import { Deck } from "./Deck";
import { NewTask } from "./NewTask";

const tasks = ["clean room", "do laundry", "walk the dog", "call mom"];

export function Tasks() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const handleClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  console.log(tasks);

  return (
    <div className="tasks-container">
      <div className="tomato-tasks-container">
        {isNewTaskOpen ? (
          <NewTask
            isNewTaskOpen={isNewTaskOpen}
            setIsNewTaskOpen={setIsNewTaskOpen}
            tasks={tasks}
          />
        ) : (
          <Deck tasks={tasks} />
        )}
      </div>
      <div style={{ display: isNewTaskOpen ? "none" : "block" }}>
        <AddTaskButton handleClick={handleClick} />
      </div>
    </div>
  );
}
