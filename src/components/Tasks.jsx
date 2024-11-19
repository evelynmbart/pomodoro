import { Link } from "react-router-dom";
import { AddTaskButton } from "./Buttons/AddTaskButton";
import { Deck } from "./Deck";

const tasks = ["clean room", "do laundry", "walk the dog", "call mom"];

export function Tasks() {
  return (
    <div className="tasks-container">
      <div>
        <Link id="link" to="/">
          Pomodoro
        </Link>
      </div>
      <div className="tomato-tasks-container">
        <Deck tasks={tasks} />
      </div>
      <AddTaskButton />
    </div>
  );
}
