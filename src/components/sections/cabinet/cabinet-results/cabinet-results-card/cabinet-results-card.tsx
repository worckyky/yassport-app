import s from './cabinet-results-card.module.scss'
import AppIconSmallCalendar from "../../../../app-icons/small/app-iconSmall-calendar";
import AppIconSmallFlash from "../../../../app-icons/small/app-iconSmall-flash";
import AppIconSmallArrow from "../../../../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFinish from "../../../../app-icons/small/app-iconSmall-finish";
import React, {useEffect, useState} from "react";
import Resizer from "../../../../resizer/resizer";
import classnames from 'classnames'
import {EMedalType, EResultsType} from "../../../../../enums/medal-type";
import Button from "../../../../button/button";
import AppIconArrowBtn from "../../../../app-icons/app-icon-arrowBtn";
import ResultFragment from "../../../../result-fragment/result-fragment";
import AppComponentPreloader from "../../../../app-component-preloader/app-component-preloader";
import reMapper from "../../../../../helpers/remapper";
import Link from 'next/link'

type ICabinetResultsCardType = {
    extraStyles?: string
    activity: {
        medal: EMedalType,
        result: EResultsType
    },
    pending?: boolean
}


const CabinetResultsCard: React.FC<ICabinetResultsCardType> = ({extraStyles, activity, pending}) => {

    const [content, setContent] = useState([])
    const setMedal = (name: string): JSX.Element => {
        switch (name) {
            case 'year':
                return <AppIconSmallCalendar/>
            case 'distance':
                return <AppIconSmallFlash/>
            case 'country':
                return <AppIconSmallArrow/>
            case 'type':
                return <AppIconSmallFinish/>
            default:
                return <AppIconSmallFlash/>
        }    }

    useEffect(() => {
        if (activity.medal) {
            const needContent = ['year', 'distance', 'country', 'medalType']
            const initialContent = Object.keys(activity.medal as EMedalType).reduce((acc, el) => {
                if (needContent.includes(el)) {
                    // @ts-ignore
                    acc.push([reMapper(el), activity.medal[el]])
                }
                return acc
            }, [])
            setContent(initialContent)
        }
    }, [activity.medal])


    const fetchData = (reactComponent: JSX.Element, style?: string, data?: any): JSX.Element => {
        if (pending) {
            return <AppComponentPreloader extraStyles={style}/>
        } else {
            return reactComponent;
        }
    }

    return (
        <div className={s.cabinetResultCard}>
            {fetchData(
                <>
                    <div className={s.medalImage}>
                        <img src={activity.medal.medalMedia} alt=""/>
                        <Resizer img={activity.medal.medalMedia} extraStyles={s.medalResizerPosition}/>
                    </div>
                    <div className={s.medalContentContainer}>
                        <h2 className={s.medalContentContainerTitle}>
                            {activity.medal.nameStart}
                        </h2>
                        <div className={s.protocolFragments}>
                            {content.map((elem, i) => {
                                return (<ResultFragment name={elem[0]} value={elem[1]} key={i} resize='page'>
                                    {setMedal(elem[0])}
                                </ResultFragment>)
                            })}
                        </div>
                        <div className={s.protocolResults}>
                            <ResultFragment
                                name={'Start number'}
                                imageBefore={
                                    <img className={s.protocolFragmentImg}
                                         src="/img/protocol/protocol-startNumber.png"/>
                                }
                                resize='page'
                                value={activity.result.bib}/>
                            <ResultFragment
                                name={'Result'}
                                imageBefore={
                                    <img className={s.protocolFragmentImg} src="/img/protocol/protocol-result.png"/>
                                }
                                resize='page'
                                value={activity.result.overalltime}/>
                            <ResultFragment
                                name={'Place'}
                                imageBefore={
                                    <img className={s.protocolFragmentImg} src="/img/protocol/protocol-place.png"/>
                                }
                                resize='page'
                                value={`#${activity.result.place}`}/>
                        </div>
                        <Link href={`/protocol/${activity.result.result_id}`}>
                            <Button size='big'
                                    type='field-primary'
                                    width={'full'}
                                    extraStyles={s.medalImageButton}>
                                <span>See result</span><AppIconArrowBtn/>
                            </Button>
                        </Link>
                    </div>
                </>,
                s.cabinetResultCardLoader
            )}
        </div>
    )
}

export default CabinetResultsCard;
