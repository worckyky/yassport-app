import s from './result-fragment.module.scss'
import React from "react";
import classnames from 'classnames'

const cn = classnames.bind(s);

type IResultFragmentProps = {
    name: string,
    value: string,
    children?: JSX.Element,
    imageBefore?: JSX.Element,
    resize?: 'card' | 'page'
}

const ResultFragment: React.FC<IResultFragmentProps> = (
    {
        name,
        value,
        children,
        resize = 'card',
        imageBefore
    }
) => {


    return (
        <div className={cn(s.medalContainerPadding,{
            [s.imageBefore]: imageBefore
        })}>
            {imageBefore}
            <div className={cn(s.medalFragment, {
                [s.imageBeforeFragment]: imageBefore
            })}>
                <span className={cn(s.medalFragmentName, {
                    [s.medalNamePage]: resize === 'page'
                })}>
                    {children}
                    <span>
                        {name}:
                    </span>
                </span>
                <p className={cn(s.medalFragmentText, {
                    [s.medalTextPage]: resize === 'page'
                })}>
                    {value}
                </p>
            </div>
        </div>
    )
}

export default ResultFragment
