import { Link } from "react-router-dom";

const tasks = ["clean room", "do laundry", "walk the dog", "call mom"];

export function Tasks() {
  return (
    <div>
      <div>tasks</div>
      <Link id="link" to="/">
        Pomodoro
      </Link>
    </div>
  );
}
