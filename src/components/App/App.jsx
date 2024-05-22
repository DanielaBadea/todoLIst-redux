
import React from "react";
import Form from "components/TodoInput/Form";
import TasksList from "components/TasksList/TasksList";
import LayoutTasks from "components/LayoutTasksList/LayoutTasks";
import StatusFilter from "components/StatusFilter/StatusFilster";
import DeleteTasks from "components/DeleteTasks/DeleteTasks";
import Counter from "components/CounterTasks/Counter";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from './App.module.css'
export const App = () => {

  const tasks = useSelector(getTasks)
  return (
    <>
    <Form/>
    {
      tasks.length>0 ? (
        <LayoutTasks>
        <Counter/>
      <StatusFilter/>
      <TasksList/>
      <DeleteTasks/>
      </LayoutTasks>
      ) : (
        <p className={css.textDefault}>The list of tasks is empty!</p>
      )
    }
   
    </>
  );
};
