import { animated, to as interpolate, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export function Deck({ tasks, onRemove }) {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(tasks.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) {
        gone.add(index);
        // Move the swiped card to the back
        const tasksCopy = [...tasks];
        const [removedTask] = tasksCopy.splice(index, 1);
        tasksCopy.push(removedTask);
        onRemove(index);
      }
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === tasks.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            className="card"
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <animated.div
              className="text"
              style={{ fontFamily: "monospace", fontSize: "3rem" }}
            >
              {tasks[i]}
            </animated.div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <button
                className="with-text"
                id="start-task"
                style={{ fontFamily: "monospace", fontSize: "1.2rem" }}
              >
                <Link id="link" to="/">
                  Work on this
                </Link>
              </button>
              <button
                title="Delete"
                onClick={() => onRemove(i)}
                style={{
                  backgroundColor: "tomato",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  padding: "0",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "110px",
                  right: "80px",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                }}
              >
                ×
              </button>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}
