import "./Header.css";
import ToDoInput from "./ToDoInput/ToDoInput";

export default function ToDoApp() {
  return (
    <>
      <div className="header-section">
        <h1 className="brand-name">To Do List</h1>
        <ToDoInput/>
      </div>
    </>
  );
}
