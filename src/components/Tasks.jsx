import { useState } from "react";
import { Link } from "react-router-dom";
import { AddTaskButton } from "./Buttons/AddTaskButton";
import { Deck } from "./Deck";
import { NewTask } from "./NewTask";

const tasks = ["clean room", "do laundry", "walk the dog", "call mom"];

export function Tasks() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const handleClick = () => {
    setIsNewTaskOpen(true);
  };

  return (
    <div className="tasks-container">
      <div>
        <Link id="link" to="/">
          Pomodoro
        </Link>
      </div>
      <div className="tomato-tasks-container">
        {isNewTaskOpen ? (
          <NewTask />
        ) : (
          <Deck tasks={tasks} /> && <AddTaskButton handleClick={handleClick} />
        )}
        {/* <Deck tasks={tasks} /> */}
      </div>
    </div>
  );
}
