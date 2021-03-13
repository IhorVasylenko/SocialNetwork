import React from "react";
import s from './Search.module.css';

const Search = (props) => {
    return (
        <form className={s.form}>
                <input type='text' className={s.formControl} placeholder='Search in Go to IT' />
        </form>
    )
}

export default Search