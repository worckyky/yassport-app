import React from "react";

import s from './page-layout.module.scss'

type Props = {
    children: JSX.Element
}

const PageLayout: React.FC<Props> = ({children}) => {
    return (
        <div className={s.layout}>
            {children}
        </div>
    )
}

export default PageLayout
