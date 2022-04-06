
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
const cn = classnames.bind(s);

type ICabinetResultsCardType = {
    extraStyles?: string
    activity: {
        medal: EMedalType,
        result: EResultsType
    }
}


const CabinetResultsCard: React.FC<ICabinetResultsCardType> = ({extraStyles, activity}) => {

    const [content, setContent] = useState([])
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

    useEffect(() => {
        if (activity.medal) {
            const needContent = ['year', 'distance', 'location', 'type']
            const initialContent = Object.keys(activity.medal as EMedalType).reduce((acc, el) => {
                if (needContent.includes(el)) {
                    // @ts-ignore
                    acc.push([el, activity.medal[el]])
                }
                return acc
            }, [])
            setContent(initialContent)
        }
    }, [activity.medal])


    return (
        <div className={s.cabinetResultCard}>
            <div className={s.medalImage}>
                <img src={activity.medal.img} alt=""/>
                <Resizer img={activity.medal.img} extraStyles={s.medalResizerPosition}/>
            </div>
            <div className={s.medalContentContainer}>
                <h2 className={s.medalContentContainerTitle}>
                    {activity.medal.name}
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
                            <img className={s.protocolFragmentImg} src="/img/protocol/protocol-startNumber.png" />
                        }
                        resize='page'
                        value={activity.result.startNumber}/>
                    <ResultFragment
                        name={'Result'}
                        imageBefore={
                            <img className={s.protocolFragmentImg} src="/img/protocol/protocol-result.png" />
                        }
                        resize='page'
                        value={activity.result.result}/>
                    <ResultFragment
                        name={'Place'}
                        imageBefore={
                            <img className={s.protocolFragmentImg} src="/img/protocol/protocol-place.png" />
                        }
                        resize='page'
                        value={`#${activity.result.place}`}/>
                </div>
                <Button size='big'
                        type='field-primary'
                        width={'full'}
                        extraStyles={s.medalImageButton}>
                    <span>See result</span><AppIconArrowBtn/>
                </Button>
            </div>
        </div>
    )
}

export default CabinetResultsCard;
