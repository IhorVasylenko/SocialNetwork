import React from "react";
import s from './preLoader.module.css';

let PreLoader = (props) => {
    return <div className={s.container}>
        <img src={'loadingSVG.svg'} alt={''}/>
    </div>
}

export default PreLoader