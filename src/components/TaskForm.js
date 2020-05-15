import React, { useState, useContext, useEffect, editTask } from "react";
import { TaskListContext } from "../context/TaskListContext";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { tasks, addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Add Text ..."
          onChange={handleChange}
          value={title}
          required
        />
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Item" : "Add Task"}
        </button>
        {!tasks.length || (
          <button className="btn add-task-btn" onClick={clearList}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
