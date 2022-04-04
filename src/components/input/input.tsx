import s from './input.module.scss'
import React, {LegacyRef, useEffect, useRef, useState} from "react";
import classnames from 'classnames'
import {DatePicker} from "antd";
import AppIconCalendar from "../app-icons/app-icon-calendar";
import AppIconEye from "../app-icons/app-icon-eye";
import {useFormikContext} from "formik";
import AppIconSmallRequired from "../app-icons/small/app-iconSmall-required";

const cn = classnames.bind(s);


type EInputType = {
    value?: string,
    onChange?: (value: string) => void,
    extraStyles?: string,
    name?: string,
    placeHolder?: string,
    width?: 'default' | 'full'
    icon?: JSX.Element
    type?: string
    field?: any
    required?: boolean,
    error?: ''
    touched?: boolean
}

const Input: React.FC<EInputType> = (
    {
        field,
        value = '',
        name,
        onChange,
        extraStyles,
        placeHolder,
        width = 'default',
        type = 'text',
        icon,
        required = false,
        error,
        touched,
        ...props
    }
) => {

    const [data, setData] = useState(value)
    const [showPass, setOnShowPass] = useState(false)
    const inputRef = useRef<HTMLInputElement>()


    const formikContext = useFormikContext();

    const changeData = (e: string) => {
        setData(e)
        if (onChange) {
            onChange(e)
        }
    }
    const mapStyles = () => {
        return {
            [s.inputDefault]: width === 'default',
            [s.inputFull]: width === 'full',
        }
    }

    const onAreaClick = () => {
        inputRef.current?.focus()
    }

    const onChangeDate = (selectedTime: any, value: any) => {
        formikContext && formikContext.setFieldValue(field.name, value)

        if (onChange) {
            onChange(value)
        }
    }

    const changeOnDatePicker = () => {
        if (type === 'date') {
            return <DatePicker
                {...props}
                className={s.inputPicker}
                placeholder={placeHolder}
                name={name}
                format="DD-MM-YYYY"
                bordered={false}
                allowClear={false}
                suffixIcon={<AppIconCalendar/>}
                onChange={onChangeDate}
            />
        } else {
            return <input
                ref={inputRef as LegacyRef<HTMLInputElement>}
                type={!showPass ? type : 'text'}
                name={name}
                value={data}
                required={required}
                onChange={(e) => changeData(e.target.value)}
                placeholder={placeHolder}
                {...field}
                {...props}
            />
        }

    }

    const changeOnPassWord = () => {
        if (type === 'password') {
            return <AppIconEye hide={showPass} onClick={() => setOnShowPass((state) => !state)}/>
        } else {
            return (
                <span style={{width: 24, height: 24}}>
                    {icon}
                </span>
            )
        }
    }


    return (
        <div className={cn(s.input, mapStyles(), {
            [s.inputError]: error && touched
                }, extraStyles)
            }
            onClick={onAreaClick}>
            {required && <div className={s.inputRequired}><AppIconSmallRequired/></div>}
            {changeOnDatePicker()}
            {changeOnPassWord()}
        </div>
    )
}

export default Input
