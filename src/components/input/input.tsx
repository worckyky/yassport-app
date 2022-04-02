
import s from './input.module.scss'
import React, {LegacyRef, useRef, useState} from "react";
import classnames from 'classnames'
import {Moment} from "moment";
import {DatePicker} from "antd";
import AppIconSmallCalendar from "../app-icons/small/app-iconSmall-calendar";
import AppIconCalendar from "../app-icons/app-icon-calendar";
const cn = classnames.bind(s);


type EInputType = {
    value?: string,
    onChange: (value: string) => void,
    extraStyles?: string,
    name?: string,
    placeHolder?: string,
    width: 'default' | 'full'
    icon?: JSX.Element
    type?: string
}

const Input: React.FC<EInputType> = (
    {
        value = '',
        name,
        onChange,
        extraStyles,
        placeHolder,
        width = 'default',
        type = 'text',
        icon}
) => {

    const [data, setData] = useState(value)
    const inputRef = useRef<HTMLInputElement>()

    const changeData = (e : string) => {
        setData(e)
        onChange(e)
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

    const onChangeDate = (selectedTime: any, value: any ) => {
        onChange(value)
    }

    const changeOnDatePicker = () => {
        if (type === 'date') {
            return <DatePicker
                className={s.inputPicker}
                placeholder={placeHolder}
                format="YYYY-MM-DD"
                bordered={false}
                allowClear={false}
                suffixIcon={<AppIconCalendar/>}
                onChange={onChangeDate}
            />
        } else {
            return <input
                ref={inputRef as LegacyRef<HTMLInputElement>}
                type={type}
                name={name}
                value={data}
                onChange={(e)=> changeData(e.target.value)}
                placeholder={placeHolder}
            />
        }

    }

    return (
        <div className={cn(s.input, mapStyles(), extraStyles)} onClick={onAreaClick}>
            {changeOnDatePicker()}
            {icon}
        </div>
    )
}

export default Input
