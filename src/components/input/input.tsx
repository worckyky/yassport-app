
import s from './input.module.scss'
import React, {useState} from "react";
import classnames from 'classnames'
const cn = classnames.bind(s);


type EInputType = {
    value?: string,
    onChange: (value: string) => void,
    extraStyles?: string,
    name?: string,
    placeHolder?: string,
    width: 'default' | 'full'
    icon?: JSX.Element
}

const Input: React.FC<EInputType> = (
    {
        value = '',
        name,
        onChange,
        extraStyles,
        placeHolder,
        width = 'default',
        icon}
) => {

    const [data, setData] = useState(value)

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

    return (
        <div className={cn(s.input, mapStyles(), extraStyles)}>
            <input
                name={name}
                value={data}
                onChange={(e)=> changeData(e.target.value)}
                placeholder={placeHolder}
            />
            {icon}
        </div>
    )
}

export default Input
