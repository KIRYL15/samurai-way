import style from './FormsControls.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import React from "react";

type FormControlPropsType = {
    input: WrappedFieldInputProps
    type?: string
    meta: WrappedFieldMetaProps
}
export const FormControl: React.FC<WrappedFieldProps> = React.memo(({input, meta: {touched, error}, ...restProps}) => {
    const hasError = error && touched
    return (
        <>
            <div className={style.formControl + " " + (hasError ? style.error : " ")}>
                <div>{restProps.children}</div>
                {hasError && <span>{error}</span>}
            </div>
        </>
    )
})


export const Textarea: React.FC<WrappedFieldProps> = React.memo((props) => {
        const {input, meta, children, ...restProps} = props
        return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    }
)

export const Input: React.FC<WrappedFieldProps> = React.memo((props) => {
        const {input, meta, children, ...restProps} = props
        return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    }
)
//
// classNames, clsx
// className={clsx(forControl, error, isActive && 'active'}
//const hasError = meta.error && meta.touched
//const {input, meta, children, ...restProps} = props

/*  <div className={style.formControl + " " + (hasError ? style.error : " ")}>
      <div><textarea {...input} {...props}/></div>
      <div>{hasError && <span>{meta.error}</span>}</div>
  </div>*/


/*
export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={style.formControl + " " + (hasError ? style.error : " ")}>
            <div><input {...input} {...props}/></div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}*/
