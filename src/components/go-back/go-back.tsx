import s from './go-back.module.scss'
import {useRouter} from "next/router";
import AppIconArrowLeft from "../app-icons/app-icon-arrowLeft";
import React, {useEffect} from "react";


type EGoBackPropsType = {
    home?: boolean
}

const GoBack: React.FC<EGoBackPropsType> = ({home}) => {

    const router = useRouter();

    return (
        <div className={s.goBack} onClick={() => home ? router.push('/') : router.back()}>
            <AppIconArrowLeft/> <span>Go back</span>
        </div>
    )
}

export default GoBack
