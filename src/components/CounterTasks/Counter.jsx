import React from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from './Counter.module.css'

const Counter = () => {
    const statusTasks = useSelector(getTasks);

     const counter = statusTasks.reduce((acc, task) =>{
        if(task.done){
            acc.done +=1;
        }else {
            acc.todo +=1;
        }
        return acc;
        },{done:0, todo:0})

    return(
        <div className={css.wrapperCounter}>
        <p className={css.text}><span className={css.spanText}>Tasks active :</span> <span className={css.dataCounter}>{counter.todo}</span></p>
        <p className={css.text}><span className={css.spanText}>Tasks done :</span><span className={css.dataCounter}>{counter.done}</span></p>
      </div>
    )
}
export default Counter;