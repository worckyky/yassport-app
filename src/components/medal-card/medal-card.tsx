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
import {useRouter} from "next/router";
import Link from 'next/link'
import AppComponentPreloader from "../app-component-preloader/app-component-preloader";
import moment from "moment";

const cn = classnames.bind(s);

type IMedalPropsType = {
    medal: EMedalType,
    pending?: boolean
}

const MedalCard: React.FC<IMedalPropsType> = ({medal, pending}) => {

    const router = useRouter();
    const [content, setContent] = useState([])

    useEffect(() => {
        const needContent = ['datestart', 'distantion', 'country', 'type']
        const initialContent = Object.keys(medal).reduce((acc, el) => {
            if (needContent.includes(el)) {
                // @ts-ignore
                let data = ''
                if (el === 'datestart') {
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
            case 'year':
                return <AppIconSmallCalendar/>
            case 'distance':
                return <AppIconSmallFlash/>
            case 'location':
                return <AppIconSmallArrow/>
            case 'type':
                return <AppIconSmallFinish/>
            default:
                return <AppIconSmallFlash/>
        }
    }



    const fetchContent = () => {
        if (pending) {
            return <AppComponentPreloader/>
        } else {
            return <div className={s.medal}>
                <div className={s.medalHead}>
                    {medal.img ? <img className={s.medalImg} src={medal.img} alt={medal.namestart}/> : <img className={s.medalImg} src="/img/empty-state.svg" alt="Empty state"/>}
                    <div className={s.medalTitle}>
                        <h3>{medal.namestart}</h3>
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
