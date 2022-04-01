import React from "react";
import s from './button.module.scss'
import classnames from 'classnames'

const cn = classnames.bind(s);

type IBtnProps = {
    onClick?: () => void;
    children: any
    type?: 'field-primary' | 'outline-second' | 'field' | 'outline-primary'
    size?: 'normal' | 'big'
    width?: 'default' | 'full'
    extraStyles?: string
}

const Button: React.FC<IBtnProps> = (
        {
            onClick,
            children,
            type= 'field-primary',
            size= 'normal',
            width = 'default',
            extraStyles,
        }
    ) => {

    const mapStyles = () => {
        return {
            [s.btnPrimary]: type === 'field-primary',
            [s.btnSecondary]: type === 'outline-second',
            [s.btnOutlinePrimary]: type === 'outline-primary',
            [s.btnBig]: size === 'big',
            [s.btnNormal]: size === 'normal',
            [s.btnWidthDefault]: width === 'default',
            [s.btnWidthFull]: width === 'full',
        }
    }

    return (
        <button className={cn(s.btn, mapStyles(), extraStyles)} onClick={onClick}>{children}</button>
    )
}

export default Button
