
import s from './protocol-container.module.scss'
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {takeMedal} from "../../../store/slice/medalSlice";
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


type IProtocolContainerType = {
    id: string
}

const ProtocolContainer: React.FC<IProtocolContainerType> = ({id}) => {

    const dispatch = useAppDispatch();
    const {protocol} = useAppSelector(selectProtocol);
    const [content, setContent] = useState([])

    useEffect(() =>{
        dispatch(takeMedal(id))
    },[id])


    useEffect(() => {
        if (protocol.medal) {
            const needContent = ['year', 'distance', 'location', 'type']
            const initialContent = Object.keys(protocol.medal as EMedalType).reduce((acc, el) => {
                if (needContent.includes(el)) {
                    // @ts-ignore
                    acc.push([el, protocol.medal[el]])
                }
                return acc
            }, [])
            setContent(initialContent)
        }
    }, [protocol.medal])

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
        <div className={s.protocolPage}>
            <div className={s.protocolImage}>
                <img src={protocol.medal?.img} alt=""/>
                <Resizer img={protocol.medal?.img} extraStyles={s.protocolResizerPosition}/>
            </div>
            <div className={s.protocolContent}>
                <div className={s.protocolBlock}>
                    <div className={s.protocolFragments}>
                        {content.map((elem, i) => {
                            return (<ResultFragment name={elem[0]} value={elem[1]} key={i} resize='page'>
                                {setMedal(elem[0])}
                            </ResultFragment>)
                        })}
                    </div>
                    <div className={s.protocolInformation}>
                        <div className={s.protocolUser}>
                            <h1 className={s.protocolTitle}>{protocol.result.name}</h1>
                            <img className={s.protocolAvatar} src={protocol.result.avatar} alt=""/>
                        </div>
                        <div className={s.protocolResults}>
                            <ResultFragment
                                name={'Start number'}
                                imageBefore={
                                    <img className={s.protocolFragmentImg} src="/img/protocol/protocol-startNumber.png" />
                                }
                                resize='page'
                                value={protocol.result.startNumber}/>
                            <ResultFragment
                                name={'Result'}
                                imageBefore={
                                    <img className={s.protocolFragmentImg} src="/img/protocol/protocol-result.png" />
                                }
                                resize='page'
                                value={protocol.result.result}/>
                            <ResultFragment
                                name={'Place'}
                                imageBefore={
                                    <img className={s.protocolFragmentImg} src="/img/protocol/protocol-place.png" />
                                }
                                resize='page'
                                value={`#${protocol.result.place}`}/>
                        </div>
                        <div className={s.protocolButtonContainer}>
                            <Button size='big' type='field-primary'>Add result</Button>
                        </div>
                    </div>
                </div>
                <div className={s.protocolCheckPoints}>
                    <h2 className={s.protocolCheckPointsTitle}>
                        Checkpoints
                    </h2>
                    <Table
                        dataSource={protocol.protocol}
                        bordered
                        columns={protocol.columns}
                        pagination={false}/>
                </div>
            </div>
        </div>
    )
}

export default ProtocolContainer;

