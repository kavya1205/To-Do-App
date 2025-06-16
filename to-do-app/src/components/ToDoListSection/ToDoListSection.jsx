import React from "react";
import "./ToDoListSection.css"
export default function ToDoListSection({ todolistItems }) {
  return (
    <div>
      {todolistItems.map((d) => (
        <div className="card-section">
        <p className="list-items">{d.label}</p>
        </div>
      ))}
    </div>
  );
}
