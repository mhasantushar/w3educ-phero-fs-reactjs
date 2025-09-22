export default function ToDo({ task, isDone, nextEval=0 }) {
  // if (isDone) return <li>✔️ Done: {task}</li>;  //can return null too for done tasks
  // else return <li>✖️ Pending: {task}, next check in {nextEval} minutes</li>;

  return <li>{isDone ? "Done: " : "Pending: "}{task}, next check in {nextEval} minutes</li>;

  // return isDone && <li>Done: {task}</li>;  //shows only if true

  // return isDone || <li>Pending: {task}</li>; //shows only if false

}
