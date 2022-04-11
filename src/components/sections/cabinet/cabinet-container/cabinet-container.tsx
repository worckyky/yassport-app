
import s from './cabinet-container.module.scss'
import React, {useEffect, useState} from "react";
import classnames from 'classnames'
import {useRouter} from "next/router";
import {ESectionType} from "../../../../../pages/cabinet";
import CabinetResults from "../cabinet-results/cabinet-results";
import CabinetPersonalData from "../cabinet-personal-data/cabinet-personal-data";
import {useAppSelector} from "../../../../store/hooks";
import {isAuthUser} from "../../../../store/slice/authSlice";
const cn = classnames.bind(s);

type ICabinetContainerType = {
    extraStyles?: string
}

const CabinetContainer: React.FC<ICabinetContainerType> = ({extraStyles}) => {

    const router = useRouter()
    const [container, selectContainer] = useState('')
    const {tab} = router.query

    useEffect(() => {
        selectContainer(tab as string)
    }, [tab])

    const returnContainer = () => {
        switch (container) {
            case ESectionType.REWARDS:
                return <CabinetResults/>
            case ESectionType.PERSONAL_INFORMATION:
                return <CabinetPersonalData/>
        }
    }


    return (
        <div className={cn(s.cabinetContainer, extraStyles)}>
            {returnContainer()}
        </div>
    )
}

export default CabinetContainer;
