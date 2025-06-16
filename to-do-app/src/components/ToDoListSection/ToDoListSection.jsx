import React from "react";
import "./ToDoListSection.css"
import DeleteIcon from '@mui/icons-material/Delete';
export default function ToDoListSection({ todolistItems,handleDelete }) {
  return (
    <div>
      {todolistItems.map((d) => (
        <div className="card-section">
        <p className="list-items">{d.label}</p>
        <button className="delete-icon" onClick={()=>handleDelete(d.id)} id={d.id}>Delete</button>
        </div>
      ))}
    </div>
  );
}
