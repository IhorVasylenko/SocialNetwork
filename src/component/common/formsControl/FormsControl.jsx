import React from "react";
import s from './FormsControl.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '') }>
            <div>
                {React.createElement(props.el, {...input, ...props})}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => <FormControl el ='textarea'{...props}/>

export const Input = (props) => <FormControl el ='input'{...props}/>