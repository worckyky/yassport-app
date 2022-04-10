import React, {useState} from "react";
import {Modal} from "antd";
import s from './resizer.module.scss';
import AppIconResize from "../app-icons/app-icon-resize";
import classnames from 'classnames'
import {CloseOutlined} from "@ant-design/icons";
import AppIconCloseModal from "../app-icons/app-icon-closeModal";
import AppIconArrowLeft from "../app-icons/app-icon-arrowLeft";
import {useRouter} from "next/router";
const cn = classnames.bind(s);


type IResizerPropTypes = {
    img?: string,
    extraStyles?: string,
    onGoBack?: boolean,
    location?: string
}


const Resizer: React.FC<IResizerPropTypes> = (
    {
        img,
        extraStyles,
        onGoBack= false,
    } ) => {

    const [visible, setVisible] = useState(false);
    const router = useRouter()

    const onHandler = () => {
        !onGoBack ? setVisible(true) : router.back()
    }

    return (
        <>
            <div className={cn(s.resizerButton, extraStyles)} onClick={onHandler}>
                {onGoBack ? <AppIconArrowLeft/> : <AppIconResize/>}
            </div>
            <Modal
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                width='100%'
                footer={null}
                closeIcon={<AppIconCloseModal/>}
            >
                <img className={s.resizerImage} src={img as string}/>
            </Modal>
        </>

    )
}

export default Resizer;
