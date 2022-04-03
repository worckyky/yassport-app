
import s from './medal-container.module.scss'
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectMedalById} from "../../../store/slice/medalSlice";
import {takeMedal} from "../../../store/slice/medalSlice";
import Resizer from "../../resizer/resizer";
import AppIconSmallCalendar from "../../app-icons/small/app-iconSmall-calendar";
import AppIconSmallFlash from "../../app-icons/small/app-iconSmall-flash";
import AppIconSmallArrow from "../../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFinish from "../../app-icons/small/app-iconSmall-finish";
import {EMedalType} from "../../../enums/medal-type";
import ResultFragment from "../../result-fragment/result-fragment";
import Button from "../../button/button";
import {EDeviceType, useWindowSize} from "../../../helpers/device-helper";


type IMedalContainerType = {
    id: string
}

const MedalContainer: React.FC<IMedalContainerType> = ({id}) => {

    const dispatch = useAppDispatch();
    const medal = useAppSelector(selectMedalById);
    const [content, setContent] = useState([])
    const device = useWindowSize()
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType)

    useEffect(() =>{
        dispatch(takeMedal(id))
    },[id])


    useEffect(() => {
        if (medal) {
            const needContent = ['year', 'distance', 'location', 'type']
            const initialContent = Object.keys(medal as EMedalType).reduce((acc, el) => {
                if (needContent.includes(el)) {
                    // @ts-ignore
                    acc.push([el, medal[el]])
                }
                return acc
            }, [])
            setContent(initialContent)
        }
    }, [medal])

    const setMedal = (name: string): JSX.Element => {
        switch (name) {
            case 'year':
                return <AppIconSmallCalendar size={16}/>
            case 'distance':
                return <AppIconSmallFlash size={16}/>
            case 'location':
                return <AppIconSmallArrow size={16}/>
            case 'type':
                return <AppIconSmallFinish size={16}/>
            default:
                return <AppIconSmallFlash size={16}/>
        }
    }



    return (
        <div className={s.medalPage}>
            <div className={s.medalImage}>
                <img src={medal?.img} alt=""/>
                <Resizer img={medal?.img} extraStyles={s.medalResizerPosition}/>
                {condition && <Resizer img={medal?.img} extraStyles={s.medalGoBack} onGoBack={true}/>}
            </div>
            <div className={s.medalContent}>
                <span className={s.medalId}>#{medal?.id}</span>
                <h1 className={s.medalTitle}>{medal?.name}</h1>
                <div className={s.medalFragments}>
                    {content.map((elem, i) => {
                        return (<ResultFragment name={elem[0]} value={elem[1]} key={i} resize='page'>
                            {setMedal(elem[0])}
                        </ResultFragment>)
                    })}
                </div>
                <div className={s.medalButtonContainer}>
                    <Button size='big' type='field-primary'>Add result</Button>
                </div>
            </div>
        </div>
    )
}

export default MedalContainer;
