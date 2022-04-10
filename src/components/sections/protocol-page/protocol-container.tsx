
import s from './protocol-container.module.scss'
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import Resizer from "../../resizer/resizer";
import AppIconSmallCalendar from "../../app-icons/small/app-iconSmall-calendar";
import AppIconSmallFlash from "../../app-icons/small/app-iconSmall-flash";
import AppIconSmallArrow from "../../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFinish from "../../app-icons/small/app-iconSmall-finish";
import {EMedalType} from "../../../enums/medal-type";
import ResultFragment from "../../result-fragment/result-fragment";
import Button from "../../button/button";
import {selectProtocol} from "../../../store/slice/protocolSlice";
import {Table} from "antd";
import {EDeviceType, useWindowSize} from "../../../helpers/device-helper";
import AppComponentPreloader from "../../app-component-preloader/app-component-preloader";
import moment from "moment";


type IProtocolContainerType = {
    id: string,
}

const ProtocolContainer: React.FC<IProtocolContainerType> = ({id}) => {

    const {data, error, pending, columns} = useAppSelector(selectProtocol);
    const [content, setContent] = useState([])
    const device = useWindowSize()
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType)



    useEffect(() => {
        const needContent = ['year', 'distantion', 'location', 'type']
        const initialContent = Object.keys(data.medal).reduce((acc, el) => {
            if (needContent.includes(el)) {
                // @ts-ignore
                let info = ''
                if (el === 'datestart') {
                    info = moment(data.medal[el]).format('YYYY-MM-DD')
                } else {
                    // @ts-ignore
                    info = data.medal[el] as string
                }
                // @ts-ignore
                acc.push([el, info])
            }
            return acc
        }, [])
        setContent(initialContent)

    }, [data.medal])




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
    const imageContainer = () => {
        if (data.medal.img) {
            return (
                <>
                    <img src={data.medal?.img} alt=""/>
                    <Resizer img={data.medal?.img} extraStyles={s.protocolResizerPosition}/>
                    {condition &&  <Resizer img={data.medal?.img} extraStyles={s.protocolGoBack} onGoBack={true}/>}
                </>
            )
        } else {
            return  <img src="/img/empty-state.svg" alt="Empty state"/>
    }
}

    return (
        <div className={s.protocolPage}>
            {fetchData(
                <div className={s.protocolImage}>
                    {imageContainer()}
                </div>,
                s.protocolImageLoader
            )}
            {fetchData(
                <div className={s.protocolContent}>
                    <div className={s.protocolBlock}>
                        <div className={s.protocolFragments}>
                            {content.map((elem, i) => {
                                if (!elem[1]) {
                                    return
                                }
                                return (<ResultFragment name={elem[0]} value={elem[1]} key={i} resize='page'>
                                    {setMedal(elem[0])}
                                </ResultFragment>)
                            })}
                        </div>
                        <div className={s.protocolInformation}>
                            <div className={s.protocolUser}>
                                <h1 className={s.protocolTitle}>{data.athlete.firstname + ' ' + data.athlete.lastname}</h1>
                                {/*<img className={s.protocolAvatar} src={protocol.result.avatar} alt=""/>*/}
                            </div>
                            <div className={s.protocolResults}>
                                <ResultFragment
                                    name={'Start number'}
                                    imageBefore={
                                        <img className={s.protocolFragmentImg} src="/img/protocol/protocol-startNumber.png" />
                                    }
                                    resize='page'
                                    value={data.result.bib}/>
                                <ResultFragment
                                    name={'Result'}
                                    imageBefore={
                                        <img className={s.protocolFragmentImg} src="/img/protocol/protocol-result.png" />
                                    }
                                    resize='page'
                                    value={data.result.overalltime}/>
                                <ResultFragment
                                    name={'Place'}
                                    imageBefore={
                                        <img className={s.protocolFragmentImg} src="/img/protocol/protocol-place.png" />
                                    }
                                    resize='page'
                                    value={`#${data.result.place}`}/>
                            </div>
                            <div className={s.protocolButtonContainer}>
                                <Button size='big' type='field-primary'>Add result</Button>
                            </div>
                        </div>
                    </div>
                    {data.splits && <div className={s.protocolCheckPoints}>
                        <h2 className={s.protocolCheckPointsTitle}>
                            Checkpoints
                        </h2>
                        <Table
                            dataSource={data.splits}
                            bordered
                            columns={columns}
                            pagination={false}/>
                    </div>}

                </div>,
                s.protocolContentLoader
            )}


        </div>
    )
}

export default ProtocolContainer;

