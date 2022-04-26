
import s from './protocol-container.module.scss'
import React, {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import Resizer from "../../resizer/resizer";
import AppIconSmallCalendar from "../../app-icons/small/app-iconSmall-calendar";
import AppIconSmallFlash from "../../app-icons/small/app-iconSmall-flash";
import AppIconSmallArrow from "../../app-icons/small/app-iconSmall-arrow";
import AppIconSmallFinish from "../../app-icons/small/app-iconSmall-finish";
import ResultFragment from "../../result-fragment/result-fragment";
import Button from "../../button/button";
import {approveProtocol, selectProtocol} from "../../../store/slice/protocolSlice";
import {Modal, Table} from "antd";
import {EDeviceType, useWindowSize} from "../../../helpers/device-helper";
import AppComponentPreloader from "../../app-component-preloader/app-component-preloader";
import moment from "moment";
import reMapper from "../../../helpers/remapper";
import Link from "next/link";
import {selectCheckUser} from "../../../store/slice/authSlice";
import AppIconCloseModalSmall from "../../app-icons/app-icon-closeModalSmall";
import CustomLink from "../../link/link";
import {useRouter} from "next/router";


type IProtocolContainerType = {
    id: string,
}

const ProtocolContainer: React.FC<IProtocolContainerType> = ({id}) => {

    const {data, pending, columns, approved} = useAppSelector(selectProtocol);
    const user = useAppSelector(selectCheckUser)
    const [content, setContent] = useState([])
    const device = useWindowSize()
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType)
    const doCheckUser = useAppSelector(selectCheckUser);
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [visible, setVisible] = useState(false);



    useEffect(() => {
        const needContent = ['year', 'distance', 'country', 'medalType']
        const initialContent = Object.keys(data.medal).reduce((acc, el) => {
            if (needContent.includes(el)) {
                // @ts-ignore
                let info = ''
                if (el === 'dateStart') {
                    info = moment(data.medal[el]).format('YYYY-MM-DD')
                } else {
                    // @ts-ignore
                    info = data.medal[el] as string
                }
                // @ts-ignore
                acc.push([reMapper(el), info])
            }
            return acc
        }, [])
        setContent(initialContent)

    }, [data.medal])




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


    const renderContent = useCallback(() => {
        if (approved.state === 'success') {
            return (
                <>
                    <img src="/img/rocket.png" alt="Success!"/>
                    <h2>{approved.text}</h2>
                </>
            )
        } else {
            return (
                <>
                    <img src="/img/reject.png" alt="Reject:("/>
                    <h2>{approved.text}</h2>
                    <p>Write us at&nbsp;<CustomLink href='mailto:support@yassport.org'>support@yassport.org</CustomLink> to get some&nbsp;help</p>
                </>
            )
        }

    },[approved])

    const onCloseModal = () => {

        setTimeout(() => {
            if (approved.state === 'success') {
                router.push('/cabinet')
            }
        }, 2000)
        setVisible(false)


    }
    const onApproveProtocol = () => {
        dispatch(approveProtocol(
            {
                token: user.token,
                user_id: user.user_id,
                result_id: Number(id)
            })
        ).then(() => {
            setVisible(true)
        })
    }


    const setButton = useCallback(() => {

        const condition = doCheckUser.userResultIds.includes(Number(id))

        return (
            <div className={s.protocolButtonContainer}>
                <Button disabled={!doCheckUser.token || pending || condition}
                        size='big'
                        type='field-primary'
                        onClick={onApproveProtocol}>
                    {condition ? 'Result was added' : 'Add to profile'}
                </Button>
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
    },[doCheckUser, pending])


    const fetchData = useCallback ((reactComponent: JSX.Element, style?:string ) : JSX.Element => {
        if (pending) {
            return <AppComponentPreloader extraStyles={style}/>
        } else  {
            return reactComponent;
        }
    }, [pending])
    const imageContainer = () => {
        if (data.medal.medalMedia) {
            return (
                <>
                    <img src={data.medal?.medalMedia} alt=""/>
                    <Resizer img={data.medal?.medalMedia} extraStyles={s.protocolResizerPosition}/>
                    {condition &&  <Resizer img={data.medal?.medalMedia} extraStyles={s.protocolGoBack} onGoBack={true}/>}
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
                                <span className={s.protocolNameStart}>{data.medal.nameStart}</span>
                                <h1 className={s.protocolTitle}>{data.athlete.firstName + ' ' + data.athlete.lastName}</h1>
                                {/*<img className={s.protocolAvatar} src={data.result.avatar} alt=""/>*/}
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
                            {setButton()}
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
            <Modal
                centered
                visible={visible}
                onCancel={() => onCloseModal()}
                width={condition ? '100%' : 400}
                footer={null}
                closeIcon={<AppIconCloseModalSmall/>}
            >
                <div className={s.protocolActionModal}>
                    {renderContent()}
                </div>
            </Modal>

        </div>
    )
}

export default ProtocolContainer;

