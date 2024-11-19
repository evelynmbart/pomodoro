export function NewTask({ isNewTaskOpen, setIsNewTaskOpen }) {
  const handleAddTask = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  return (
    <div className="new-tomato-task">
      <form>
        <label id="task">New Todo:</label>
        <input id="input" type="text" placeholder="Do laundry" />
        <button className="with-text" id="submit" onClick={handleAddTask}>
          Submit
        </button>
      </form>
    </div>
  );
}
