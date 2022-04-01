import React, {useState} from "react";
import {Modal} from "antd";
import s from './resizer.module.scss';
import AppIconResize from "../app-icons/app-icon-resize";
import classnames from 'classnames'
import {CloseOutlined} from "@ant-design/icons";
import AppIconCloseModal from "../app-icons/app-icon-closeModal";
const cn = classnames.bind(s);


type IResizerPropTypes = {
    img?: string,
    extraStyles?: string,
}


const Resizer: React.FC<IResizerPropTypes> = ({img,extraStyles} ) => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className={cn(s.resizerButton, extraStyles)} onClick={()=> setVisible(true)}>
                <AppIconResize/>
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
