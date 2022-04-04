import Image from "next/image";
import s from './header.module.scss'
import Button from "../button/button";
import AppIconLogin from "../app-icons/app-icon-login";
import {EDeviceType, useWindowSize} from "../../helpers/device-helper";
import AppMobileLogo from "../app-icons/logo/app-mobile-logo";
import {useRouter} from "next/router";
import AppIconCloseModal from "../app-icons/app-icon-closeModal";
import {Modal} from "antd";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {closeModal, openModal, selectOnOpen} from "../../store/slice/loginSlice";
import LoginForm from "../sections/registration/login-form/login-form";
import AppIconCloseModalSmall from "../app-icons/app-icon-closeModalSmall";

const Header = () => {
    const device = useWindowSize()
    const visible = useAppSelector(selectOnOpen);
    const dispatch = useAppDispatch();

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET].includes(device as EDeviceType)



    const router = useRouter()
    const onMain = () => {
        router.push(`/`)
    }

    return (
        <>
            <div className={s.header}>
            <span className={s.headerBack} onClick={onMain}>
                {condition ? <AppMobileLogo/> : <Image src={'/img/header/yass-logo.png'} width={200} height={28}/>}
            </span>
                {device === EDeviceType.MOBILE ?
                    <div className={s.headerLoginIcon} onClick={() => dispatch(openModal())}> <AppIconLogin/></div> :
                    <Button onClick={() => dispatch(openModal())} type={'outline-second'} size='normal'>
                        <AppIconLogin/> <span className={s.headerBtnText}>Sign in / Register</span>
                    </Button>
                }
            </div>
            <Modal
                centered
                visible={visible}
                onCancel={() => dispatch(closeModal())}
                width={condition ? '100%' : 400}
                footer={null}
                closeIcon={<AppIconCloseModalSmall/>}
            >
                <>
                    <LoginForm/>
                </>
            </Modal>
        </>

    )
}

export default Header
