
import React from "react";
import Form from "components/TodoInput/Form";
import TasksList from "components/TasksList/TasksList";
import LayoutTasks from "components/LayoutTasksList/LayoutTasks";
import StatusFilter from "components/StatusFilter/StatusFilster";
import DeleteTasks from "components/DeleteTasks/DeleteTasks";
import Counter from "components/CounterTasks/Counter";
export const App = () => {
  return (
    <>
    <Form/>
    <LayoutTasks>
      <Counter/>
    <StatusFilter/>
    <TasksList/>
    <DeleteTasks/>
    </LayoutTasks>
    </>
  );
};
