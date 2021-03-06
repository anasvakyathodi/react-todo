import React, { useContext } from "react";
import Task from "./Task";
import { TaskListContext } from "../context/TaskListContext";
const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div class="no-tasks">NoTasks</div>
      )}
    </>
  );
};

export default TaskList;
