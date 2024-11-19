import { Link } from "react-router-dom";
import { Deck } from "./Deck";

const tasks = ["clean room", "do laundry", "walk the dog", "call mom"];

export function Tasks() {
  return (
    <div className="container">
      <Link id="link" to="/">
        Pomodoro
      </Link>
      <Deck tasks={tasks} />
    </div>
  );
}
