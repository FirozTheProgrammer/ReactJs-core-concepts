// export default function Todo({ task , isDone}) {
//   return (
//     <div>
//       <li>Task: {task} </li>
//     </div>
//   );
// }

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finisd: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <li>
//         {isDone ? "Finished" : "Work on"}: {task}{" "}
//       </li>
//     </div>
//   );
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <li>
//         {task} : {isDone || "not done"}{" "}
//       </li>
//     </div>
//   );
// }

export default function Todo({ task, isDone }) {
  return (
    <div>
      <li>
        {task} : {isDone && "done"}
      </li>
    </div>
  );
}
