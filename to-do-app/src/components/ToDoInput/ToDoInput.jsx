import React, { useState } from "react";
import "./ToDoInput.css";
import ToDoListSection from "../ToDoListSection/ToDoListSection";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function ToDoInput() {
  const [addTask, setAddTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [isAddTaskBtnClicked, setIsAddTaskBtnClicked] = useState(false);
  const handleAddClick = () => {
    setIsAddTaskBtnClicked(true);
  };
  const handleAddTaskChange = (e) => {
    setInputValue(e.target.value); 
  };
  const handleConfirm = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        label: inputValue,
      };
      setAddTask((prev) => [...prev, newTask]);
      setInputValue(""); 
      setIsAddTaskBtnClicked(false);
    }
    setIsAddTaskBtnClicked(false);
  };
  console.log("addTask===>", addTask);
  return (
    <>
      <div className="container">
        <button onClick={handleAddClick} className="add-btn">
          Add Task
        </button>
        {isAddTaskBtnClicked && (
          <>
            <div className="buttons-container">
              <input
                className="todo-input"
                placeholder="Add a to do task here"
                onChange={(e) => handleAddTaskChange(e)}
              />
              <CheckCircleIcon
                style={{ fill: "green" }}
                onClick={() => handleConfirm()}
              />
              <CancelIcon
                style={{ fill: "red" }}
                onClick={() => setIsAddTaskBtnClicked(false)}
              />
            </div>
          </>
        )}
        <ToDoListSection todolistItems={addTask || []} />
      </div>
    </>
  );
}
