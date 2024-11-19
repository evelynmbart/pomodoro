export function NewTask() {
  return (
    <div className="new-tomato-task">
      <form>
        <label id="task">Todo:</label>
        <input id="input" type="text" placeholder="Do laundry" />
        <button className="with-text" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
