
import s from './cabinet-container.module.scss'
import React, {useEffect, useState} from "react";
import classnames from 'classnames'
import {useRouter} from "next/router";
import {ESectionType} from "../../../../../pages/cabinet";
import CabinetResults from "../cabinet-results/cabinet-results";
import CabinetPersonalData from "../cabinet-personal-data/cabinet-personal-data";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {isAuthUser, selectCheckUser} from "../../../../store/slice/authSlice";
import {fetchResults, fetchUser} from "../../../../store/slice/cabinetSlice";
const cn = classnames.bind(s);

type ICabinetContainerType = {
    extraStyles?: string
}

const CabinetContainer: React.FC<ICabinetContainerType> = ({extraStyles}) => {

    const router = useRouter()
    const [container, selectContainer] = useState('')
    const {tab} = router.query
    const {token, user_id} = useAppSelector(selectCheckUser);
    const dispatch = useAppDispatch()

    useEffect(() => {
        selectContainer(tab as string)
    }, [tab])

    useEffect(() => {
        if (token) {
            dispatch(fetchUser({token, user_id}))
            dispatch(fetchResults({token, user_id}))
        }
    },[token])

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
