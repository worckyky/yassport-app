
import s from './medal-container.module.scss'
import React, {useCallback, useEffect, useState} from "react";
import {useAppSelector} from "../../../store/hooks";
import Resizer from "../../resizer/resizer";
import AppIconSmallCalendar from "../../app-icons/small/app-iconSmall-calendar";
import AppIconSmallFlash from "../../app-icons/small/app-iconSmall-flash";
import AppIconSmallArrow from "../../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFinish from "../../app-icons/small/app-iconSmall-finish";
import ResultFragment from "../../result-fragment/result-fragment";
import Button from "../../button/button";
import {EDeviceType, useWindowSize} from "../../../helpers/device-helper";
import AppComponentPreloader from "../../app-component-preloader/app-component-preloader";
import {selectMedal} from "../../../store/slice/medalSlice";
import {selectCheckUser} from "../../../store/slice/authSlice";
import Link from 'next/link'
import reMapper from "../../../helpers/remapper";




const MedalContainer = () => {

    const [fragments, setFragments] = useState([]);
    const doCheckUser = useAppSelector(selectCheckUser);
    const device = useWindowSize()
    const {
        medal,
        error,
        pending
    } = useAppSelector(selectMedal)

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType)



    useEffect(() => {
        const needContent = ['year', 'distance', 'country', 'medalType']
        const initialContent = Object.keys(medal).reduce((acc, el) => {
            if (needContent.includes(el)) {
                // @ts-ignore
                acc.push([reMapper(el), medal[el]])
            }
            return acc
        }, [])
        setFragments(initialContent)
    }, [medal])


    const setMedal = (name: string): JSX.Element => {
        switch (name) {
            case 'year':
                return <AppIconSmallCalendar size={16}/>
            case 'distance':
                return <AppIconSmallFlash size={16}/>
            case 'country':
                return <AppIconSmallArrow size={16}/>
            case 'medalType':
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

    const setButton = useCallback(() => {
        return (
            <div className={s.medalButtonContainer}>
                <Button disabled={!doCheckUser.token} size='big' type='field-primary'>Add to profile</Button>
                {!doCheckUser.token && <span>
                    To get medal in your list of rewards, you should {' '}
                    <Link href={'/registration'}>
                        <a>
                            sign up
                        </a>
                    </Link>
                    {' '}
                    first.
                </span>}
            </div>
        )
    },[doCheckUser])

    return (
        <div className={s.medalPage}>
            {fetchData(
                <div className={s.medalImage}>
                    {medal.medalMedia ? <img src={medal.medalMedia} alt={medal.nameStart}/> : <img src="/img/empty-state.svg" alt="Empty state"/>}
                    {medal.medalMedia && <Resizer img={medal.medalMedia} extraStyles={s.medalResizerPosition}/>}
                    {condition && <Resizer img={medal.medalMedia} extraStyles={s.medalGoBack} onGoBack={true} location={''}/>}
                </div>,
                s.medalImageLoader
            )}
            {fetchData(
                <div className={s.medalContent}>
                    {medal.id && <span className={s.medalId}>#{medal.id}</span>}
                    <h1 className={s.medalTitle}>{medal.nameStart}</h1>
                    <div className={s.medalFragments}>
                        {fragments.map((elem, i) => {
                            if (elem[1]) {
                                return (<ResultFragment name={elem[0]} value={elem[1]} key={i} resize='page'>
                                    {setMedal(elem[0])}
                                </ResultFragment>)
                            }
                        })}
                    </div>
                    {/*{setButton()}*/}
                </div>,
                s.medalContentLoader
            )}

        </div>
    )
}

export default MedalContainer;
