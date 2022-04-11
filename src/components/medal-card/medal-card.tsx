import {EMedalType} from "../../enums/medal-type";
import React, {useEffect, useState} from "react";
import s from './medal-card.module.scss'
import classnames from 'classnames'
import ResultFragment from "../result-fragment/result-fragment";
import AppIconSmallFinish from "../app-icons/small/app-iconSmall-finish";
import AppIconSmallCalendar from "../app-icons/small/app-iconSmall-calendar";
import AppIconSmallArrow from "../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFlash from "../app-icons/small/app-iconSmall-flash";
import Button from "../button/button";
import AppIconArrowBtnLong from "../app-icons/app-icon-arrowBtnLong";
import Link from 'next/link'
import AppComponentPreloader from "../app-component-preloader/app-component-preloader";
import moment from "moment";
import {EDeviceType, useWindowSize} from "../../helpers/device-helper";

const cn = classnames.bind(s);

type IMedalPropsType = {
    medal: EMedalType,
    pending?: boolean,
    count: number
}

const MedalCard: React.FC<IMedalPropsType> = ({medal, pending, count}) => {

    const [content, setContent] = useState([])
    const device = useWindowSize()
    console.log(count)

    useEffect(() => {
        const needContent = ['dateStart', 'distance', 'country', 'medalType']
        const initialContent = Object.keys(medal).reduce((acc, el) => {
            if (needContent.includes(el)) {
                // @ts-ignore
                let data = ''
                if (el === 'dateStart') {
                    data = moment(medal[el]).format('YYYY-MM-DD')
                } else {
                    // @ts-ignore
                    data = medal[el] as string
                }
                // @ts-ignore
                acc.push([el, data])
            }
            return acc
        }, [])
        setContent(initialContent)

    }, [medal])

    const setMedal = (name: string): JSX.Element => {
        switch (name) {
            case 'dateStart':
                return <AppIconSmallCalendar/>
            case 'distance':
                return <AppIconSmallFlash/>
            case 'country':
                return <AppIconSmallArrow/>
            case 'medalType':
                return <AppIconSmallFinish/>
            default:
                return <AppIconSmallFlash/>
        }
    }

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType);

    const fetchContent = () => {
        if (pending) {
            return <AppComponentPreloader/>
        } else {
            return <div className={s.medal}>
                <div className={cn(s.medalHead, {
                    [s.resizeMedal] : count % 2 == 0 && count !== 4 && !condition
                })}>
                    {medal.medalMedia ? <img className={s.medalImg} src={medal.medalMedia} alt={medal.nameStart}/> : <img className={s.medalImg} src="/img/empty-state.svg" alt="Empty state"/>}
                    <div className={s.medalTitle}>
                        <h3>{medal.nameStart}</h3>
                    </div>
                </div>

                <div className={s.medalFeatures}>
                    {content.map((elem, i) => {
                        return (<ResultFragment name={elem[0]} value={elem[1]} key={i}>
                            {setMedal(elem[0])}
                        </ResultFragment>)
                    })}
                </div>
                <div className={s.bottomsBlock}>
                    <Link href={`/medal/${[medal.id]}`}>
                        <a target="_blank" rel="noreferrer">
                            <Button type='outline-primary' size='normal' width='full'>
                                See <AppIconArrowBtnLong/>
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
        }

    }


    return (
        <>
            {fetchContent()}
        </>
    )
}
export default MedalCard;
