import React from "react";
import style from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";

export const FormControl: React.FC<WrappedFieldProps> = React.memo(({meta: {touched, error},children}) => {
    const hasError = error && touched
    return (
        <>
            <div className={style.formControl + " " + (hasError ? style.error : " ")}>
                <div>{children}</div>
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
export const CreateField = (placeholder: any, name: any, validate: any, component: any, props = {}, text = "") => {
    return (
        <div>
            <Field
                name={name}
                component={component}
                placeholder={placeholder}
                validate={validate}
                {...props}
            />{text}
        </div>
    )

}
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
