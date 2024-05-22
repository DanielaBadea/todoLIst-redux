import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filterTasksSlice";
import { getStatusFilter } from "../../redux/selectors";
import css from './StatusFilter.module.css';
import { statusFilters } from "../../redux/constants";

const StatusFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(getStatusFilter);

    const handleChangeStatusFilter = (filter) => {
        dispatch(setStatusFilter(filter));
    };

    return (
        <div className={css.wrapperFilters}>
            <button
                className={`${css.btnFilter} ${currentFilter === statusFilters.all ? css.selected : ''}`}
                onClick={() => handleChangeStatusFilter(statusFilters.all)}
            >
                All     
            </button>
            <button
                className={`${css.btnFilter} ${currentFilter === statusFilters.done ? css.selected : ''}`}
                onClick={() => handleChangeStatusFilter(statusFilters.done)}
            >
                Done
            </button>
            <button
                className={`${css.btnFilter} ${currentFilter === statusFilters.todo ? css.selected : ''}`}
                onClick={() => handleChangeStatusFilter(statusFilters.todo)}
            >
                Todo
            </button>
        </div>
    );
};

export default StatusFilter;
