import React from "react";
import s from './link.module.scss'
import classnames from "classnames";

const cn = classnames.bind(s);

type ILinkTypeProps = {
    href: string,
    extraClass?: string
    children: string
    target?: string
}

const CustomLink: React.FC<ILinkTypeProps> = ({href = '#', extraClass, children,target}) => {
    return (
        <a className={cn(s.link, extraClass)} target={target} href={href}>{children}</a>
    )
}

export default CustomLink;
