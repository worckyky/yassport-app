import React from "react";
import s from './link.module.scss'
import classnames from "classnames";

const cn = classnames.bind(s);

type ILinkTypeProps = {
    href?: string,
    extraClass?: string
    children: string
    target?: string
    click?: () => void;
}

const CustomLink: React.FC<ILinkTypeProps> = ({href = '#', extraClass, children,target, click}) => {
    return (
        <a className={cn(s.link, extraClass)} target={target} href={href} onClick={click}>{children}</a>
    )
}

export default CustomLink;
