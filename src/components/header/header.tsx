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
import Link from 'next/link'
import {checkUser, resetUser, selectCheckUser, selectLoginUser} from "../../store/slice/authSlice";
import AppIconUser from "../app-icons/app-icon-user";
import {useCallback, useEffect} from "react";


const Header = () => {
    const device = useWindowSize();
    const visible = useAppSelector(selectOnOpen);
    const doCheckUser = useAppSelector(selectCheckUser);
    const doCheckLogin = useAppSelector(selectLoginUser)
    const dispatch = useAppDispatch();
    const router = useRouter()

    useEffect(() => {
       const token = localStorage.getItem('authToken')
        const invalidPaths = ['/cabinet']
        dispatch(checkUser(token ? token : '')).then(e => {
            if ((e.payload.error && invalidPaths.includes(router.pathname)) || (e.payload.token && router.pathname === '/registration')) {
                router.push('/');
            }
        })

    },[doCheckUser.token, doCheckLogin.token])

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET].includes(device as EDeviceType)

    const onLogout = () => {
        dispatch(resetUser())
        router.push('/')
    }

    const changeOnAuth = useCallback (() => {
        if (doCheckUser.token) {
            return (
                <div className={s.headerLogout}>
                    <Link href={'/cabinet'}>
                        <a>
                            <span>
                                <AppIconUser/> {device !== EDeviceType.MOBILE && <span>{doCheckUser.firstName + ' ' + doCheckUser.lastName.charAt(0)+'.'}</span>}
                            </span>
                        </a>
                    </Link>
                    <div className={s.headerLogoutDivider}/>
                    <Button onClick={() => onLogout()} type={'outline-second'} size='normal'>
                        <span className={s.headerBtnText}>Log out</span>
                    </Button>
                </div>
            )
        } else {
            return (
                <>
                    {device === EDeviceType.MOBILE ?
                        <div className={s.headerLoginIcon} onClick={() => dispatch(openModal())}> <AppIconLogin/></div> :
                        <Button onClick={() => dispatch(openModal())} type={'outline-second'} size='normal'>
                            <AppIconLogin/> <span className={s.headerBtnText}>Sign in / Sign up</span>
                        </Button>
                    }
                </>
            )
        }
    },[doCheckUser.token, doCheckLogin.token])

    return (
        <>
            <div className={s.header}>
                <Link href={'/'}>
                    <a className={s.headerBack}>
                        {condition ? <AppMobileLogo/> : <Image src={'/img/header/yass-logo.svg'} width={200} height={28}/>}
                    </a>
                </Link>
                {changeOnAuth()}
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
