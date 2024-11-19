import { Link } from "react-router-dom";

const tasks = ["clean room", "do laundry", "walk the dog", "call mom"];

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

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
