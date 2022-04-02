import React from "react";
import s from './radio-buttons.module.scss'
import classnames from 'classnames'
const cn = classnames.bind(s);



export type IRadioType = {
    value: string,
    id: string,
    name: string
}

type IRadioArray = IRadioType[]

type IRadioButtonsType = {
    onChange: (value:string) => void,
    radioData: IRadioArray
    extraStyles?: string
}

const RadioButtons:React.FC<IRadioButtonsType> = ({onChange, radioData, extraStyles}) => {

    return (
        <div className={cn(s.radioBtnS, )}>
            {radioData.map(elem => {
                const {value, id, name} = elem
                return (
                    <>
                        <input type="radio" id={id} name={name} value={value} onChange={() => onChange(value)}/>
                    </>
                )
            })}
        </div>
    )
}

export default RadioButtons;
