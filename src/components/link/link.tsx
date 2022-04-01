import React from "react";
import s from './link.module.scss'
import classnames from "classnames";

const cn = classnames.bind(s);

type ILinkTypeProps = {
    href: string,
    extraClass?: string
    children: string
}

const Link: React.FC<ILinkTypeProps> = ({href = '#', extraClass, children}) => {
    return (
        <a className={cn(s.link, extraClass)} href={href}>{children}</a>
    )
}

export default Link;
