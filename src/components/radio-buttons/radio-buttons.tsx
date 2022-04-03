import React from "react";
import s from './radio-buttons.module.scss'
import classnames from 'classnames'
import {Field, FieldInputProps, FieldMetaProps, FormikProps} from "formik";

const cn = classnames.bind(s);


export type IRadioType = {
    key: string,
    value: string,
}

type IRadioArray = IRadioType[]

type IRadioButtonsType = {
    label: string,
    name: string,
    options: IRadioArray
    extraStyles?: string
}


const RadioButtons: React.FC<IRadioButtonsType> = ({label, name, options, extraStyles, ...rest}) => {

    return (
        <div className={cn(s.radioBtnS, extraStyles)}>
            <Field name={name} {...rest} >
                {
                    // @ts-ignore
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <div className={s.radioBtnContainer} key={option.key}>
                                    <input type="radio"
                                           id={option.value}
                                           {...field}
                                           value={option.value}
                                           checked={field?.value === option.value}/>
                                    <label htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
        </div>
    )
}

export default RadioButtons;
