import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksInitialState = {
    items: [],
    selectedItem: null,
    editItem: false
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action){
                state.items.unshift(action.payload);
            },
            prepare(text){
                return{
                    payload:{
                        id: nanoid(),
                        text,
                        done: false,
                    }
                }
            }
        },
        deleteTask(state, action) {
            state.items = state.items.filter(task => task.id !== action.payload);
        },
        editTask(state, action) {
            const { id, text } = action.payload;
            const index = state.items.findIndex(task => task.id === id);
            if (index !== -1) {
                state.items[index].text = text;
            }
        },
        toggleTask(state, action) {
            const id = action.payload;
            const task = state.items.find(task => task.id === id);
            if (task) {
                task.done = !task.done;
                state.items = state.items.filter(task => task.id !== id);
                if (task.done) {
                    state.items.push(task);  // Move to end if done
                } else {
                    state.items.unshift(task);  // Move to start if not done
                }
            }
        },
        deletedAllTaskDone(state) {
            state.items = state.items.filter(task => !task.done);
        },
        deleteAllTasks(state){
            state.items = [];

        }
    }
});

export const { addTask, deleteTask, editTask, toggleTask, deleteAllTasks, deletedAllTaskDone } = tasksSlice.actions;
export const tasksReducier =  tasksSlice.reducer;
