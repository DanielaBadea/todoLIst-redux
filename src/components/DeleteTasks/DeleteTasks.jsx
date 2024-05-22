import React from "react";
import css from './DeleteTasks.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import { deleteAllTasks, deletedAllTaskDone } from "../../redux/tasksSlice";

const DeleteTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(getTasks);

    const handleDeleteDoneTasks = () => {
        dispatch(deletedAllTaskDone());
    };

    const handleDeleteAllTasks = () => {
        dispatch(deleteAllTasks());
    };

    return (
        <div className={css.containerBtnsDelete}>
            {tasks.length > 0 && (
                <div className={css.containerBtnsDeleteTask}>
                    <button className={css.btnsdeleteTasks} onClick={handleDeleteDoneTasks}>Delete done tasks</button>
                    <button className={css.btnsdeleteTasks} onClick={handleDeleteAllTasks}>Delete all tasks</button>
                </div>
            )}
        </div>
    );
};

export default DeleteTasks;
