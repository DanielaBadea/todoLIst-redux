// import React, { useState } from "react";
import css from './Form.module.css';
import { useDispatch} from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import { CgNotes } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";


const Form = () => {
    const dispatch = useDispatch();

    const handeleSubmit = (event) => {
        event.preventDefault();
        const newTask = event.target.elements.text.value;
        dispatch(addTask(newTask));
        event.target.reset();
    }

    // handeleChange = (event) => {
    //     const task = event.target.value;
    //     dispatch(addTask(task));
    // }

    return(
        <form className={css.form} onSubmit={handeleSubmit}>
        <label className={css.labelForm}> Todo Input
        <div className={css.wrapperInput}> 
        <CgNotes className={css.iconNotes} />
            <input
            className={css.formInput}
            type="text"
            name="text"
            // value={text}
            placeholder="New Todo"
            // onChange={handeleChange}
            required />
        </div>
        
            <button className={css.btnForm}> <FaPlus className={css.inconAddTask} />Add new task</button>
        </label>
        </form>
    )
}
export default Form;