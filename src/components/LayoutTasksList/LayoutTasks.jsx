import React from "react";
import css from './LayoutTasks.module.css'

const LayoutTasks = ({children}) =>{
    return(
        <main className={css.mainLayout}>
             <h3 className={css.titleTodoList}>Todo list</h3>
        {children}
        </main>
       
    )
}

export default LayoutTasks;