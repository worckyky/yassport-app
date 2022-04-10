
import s from './medal-container.module.scss'
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../../store/hooks";
import Resizer from "../../resizer/resizer";
import AppIconSmallCalendar from "../../app-icons/small/app-iconSmall-calendar";
import AppIconSmallFlash from "../../app-icons/small/app-iconSmall-flash";
import AppIconSmallArrow from "../../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFinish from "../../app-icons/small/app-iconSmall-finish";
import {EMedalType} from "../../../enums/medal-type";
import ResultFragment from "../../result-fragment/result-fragment";
import Button from "../../button/button";
import {EDeviceType, useWindowSize} from "../../../helpers/device-helper";
import AppComponentPreloader from "../../app-component-preloader/app-component-preloader";
import {selectMedal} from "../../../store/slice/medalSlice";
import moment from "moment";




const MedalContainer = () => {

    const [fragments, setFragments] = useState([])
    const device = useWindowSize()
    const {
        content,
        error,
        pending
    } = useAppSelector(selectMedal)

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType)



    useEffect(() => {
        const needContent = ['year', 'distantion', 'location', 'type']
        const initialContent = Object.keys(content.medal).reduce((acc, el) => {
            if (needContent.includes(el)) {
                // @ts-ignore
                let data = ''
                if (el === 'datestart') {
                    data = moment(content.medal[el]).format('YYYY-MM-DD')
                } else {
                    // @ts-ignore
                    data = content.medal[el] as string
                }
                // @ts-ignore
                acc.push([el, data])
            }
            return acc
        }, [])
        setFragments(initialContent)

    }, [content.medal])


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

    const fetchData = (reactComponent: JSX.Element, style?:string ) : JSX.Element => {
        if (pending) {
            return <AppComponentPreloader extraStyles={style}/>
        } else  {
            return reactComponent;
        }
    }


    return (
        <div className={s.medalPage}>
            {fetchData(
                <div className={s.medalImage}>
                    {content.medal.img ? <img src={content.medal.img} alt={content.medal.name}/> : <img src="/img/empty-state.svg" alt="Empty state"/>}
                    {content.medal.img && <Resizer img={content.medal.img} extraStyles={s.medalResizerPosition}/>}
                    {condition && <Resizer img={content.medal.img} extraStyles={s.medalGoBack} onGoBack={true} location={''}/>}
                </div>,
                s.medalImageLoader
            )}
            {fetchData(
                <div className={s.medalContent}>
                    {content.medal.id && <span className={s.medalId}>#{content.medal.id}</span>}
                    <h1 className={s.medalTitle}>{content.medal.name}</h1>
                    <div className={s.medalFragments}>
                        {fragments.map((elem, i) => {
                            if (elem[1]) {
                                return (<ResultFragment name={elem[0]} value={elem[1]} key={i} resize='page'>
                                    {setMedal(elem[0])}
                                </ResultFragment>)
                            }
                        })}
                    </div>
                    <div className={s.medalButtonContainer}>
                        <Button size='big' type='field-primary'>Add result</Button>
                    </div>
                </div>,
                s.medalContentLoader
            )}

        </div>
    )
}

export default MedalContainer;
