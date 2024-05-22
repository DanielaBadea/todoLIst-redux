import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../../redux/tasksSlice";
import css from './Tasks.module.css';
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSaveEdit = () => {
    if (newText.trim()) {
      dispatch(editTask({ id: task.id, text: newText }));
      setIsEditing(false);
    }
  }

  const handleToggleStatusTask = () => {
    dispatch(toggleTask(task.id));
  }

  const handleChange = (e) => {
    setNewText(e.target.value);
  }

  return (
    <div className={css.wrapperTasksList}>
      <div className={css.containerTask}>
        <input
          className={css.checkInput}
          type="checkbox"
          checked={task.done}
          onChange={handleToggleStatusTask}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={handleChange}
            onBlur={handleSaveEdit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSaveEdit();
              }
            }}
            className={css.editInput}
          />
        ) : (
          <span className={css.textTask}>{task.text}</span>
        )}
      </div>
      <div className={css.wrapperBtnsTask}>
        {!isEditing && (
          <button onClick={handleEdit} className={css.btnSatusTask}>
            <MdModeEditOutline className={css.iconEdit} />
          </button>
        )}
        <button onClick={handleDelete} className={css.btnSatusTask}>
          <MdDelete className={css.iconDelete} />
        </button>
      </div>
    </div>
  );
}

export default Task;
