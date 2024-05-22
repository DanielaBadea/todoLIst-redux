import Task from "components/Tasks/Tasks";
import React from "react";
import { useSelector } from "react-redux";
import { getStatusFilter, getTasks } from "../../redux/selectors";
import css from './TasksList.module.css'
import { statusFilters } from "../../redux/constants";

const changeStatusFilters = (tasks, statusFilter) => {
  switch(statusFilter) {
    case statusFilters.todo:
      return tasks.filter(task => !task.done);
    case statusFilters.done:
      return tasks.filter(task => task.done);
    default:
      return tasks;
  }
}

const TasksList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const filteredTasks = changeStatusFilters(tasks, statusFilter);

  return (
    filteredTasks.map(task => (
      <div key={task.id} className={css.containerListTodo}>
        <Task task={task}/>
      </div>
    ))
  );
}

export default TasksList;
