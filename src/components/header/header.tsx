import Image from "next/image";
import s from './header.module.scss'
import Button from "../button/button";
import AppIconLogin from "../app-icons/app-icon-login";
import {EDeviceType, useWindowSize} from "../../helpers/device-helper";
import AppMobileLogo from "../app-icons/logo/app-mobile-logo";
import {useRouter} from "next/router";
import {Modal} from "antd";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {closeModal, openModal, selectOnOpen} from "../../store/slice/loginSlice";
import LoginForm from "../sections/registration/login-form/login-form";
import AppIconCloseModalSmall from "../app-icons/app-icon-closeModalSmall";
import Link from 'next/link'
import {checkUser, resetUser, selectCheckUser, selectLoginUser} from "../../store/slice/authSlice";
import AppIconUser from "../app-icons/app-icon-user";
import {useCallback, useEffect, useState} from "react";
import {resetCabinet} from "../../store/slice/cabinetSlice";
import CustomLink from "../link/link";
import PartnerModal from "./partnerModal/partnerModal";
import classnames from 'classnames'
import PageLayout from "../pageLayout/PageLayout";
const cn = classnames.bind(s);


const Header = () => {
    const device = useWindowSize();
    const visible = useAppSelector(selectOnOpen);
    const doCheckUser = useAppSelector(selectCheckUser);
    const doCheckLogin = useAppSelector(selectLoginUser)
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [partners, onShowPartners] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        const invalidPaths = ['/cabinet']
        dispatch(checkUser(token ? token : '')).then(e => {
            if ((e.payload.error && invalidPaths.includes(router.pathname)) || (e.payload.token && router.pathname === '/registration')) {
                router.push('/');
                dispatch(resetCabinet())
            }
        })

    }, [doCheckUser.token, doCheckLogin.token])

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET].includes(device as EDeviceType)

    const onLogout = () => {
        dispatch(resetUser())
        router.push('/')
    }

    const menuContent = () => {
        return (
            <div className={s.headerLinks}>
                <CustomLink extraClass={s.headerLinksLink} href={'https://blog.yassport.org/'}
                            target={'_blank'}>Blog</CustomLink>
                <CustomLink extraClass={s.headerLinksLink} click={() => onShowPartners(true)}>For
                    partners</CustomLink>
                {changeOnAuth()}
            </div>
        )
    }

    const changeOnAuth = useCallback(() => {
        if (doCheckUser.token) {
            return (
                <div className={s.headerLogout}>
                    <Link href={'/cabinet'}>
                        <a>
                            <span>
                                <AppIconUser/> {device !== EDeviceType.MOBILE &&
                                <span>{doCheckUser.firstName + ' ' + doCheckUser.lastName.charAt(0) + '.'}</span>}
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
                        <div className={s.headerLoginIcon} onClick={() => dispatch(openModal())}><AppIconLogin/></div> :
                        <Button onClick={() => dispatch(openModal())} type={'outline-second'} size='normal'>
                            <AppIconLogin/> <span className={s.headerBtnText}>Sign in / Sign up</span>
                        </Button>
                    }
                </>
            )
        }
    }, [doCheckUser.token, doCheckLogin.token])

    return (
        <>
            <div className={s.headerContainer}>
                <PageLayout>
                    <div className={s.header}>
                        <Link href={'/'}>
                            <a className={s.headerBack}>
                                {condition ? <AppMobileLogo/> :
                                    <Image src={'/img/header/yass-logo.svg'} width={200} height={28}/>}
                            </a>
                        </Link>
                        <span className={s.headerDesktop}>
                            {menuContent()}
                        </span>
                        <div className={s.headerActiveButtons}>
                            <div className={cn(s.mobileMenu, {
                                [s._active]: mobileMenu
                            })}
                                 onClick={() => setMobileMenu(!mobileMenu)}>
                                <span className={s.shape}></span>
                                <span className={s.shape}></span>
                                <span className={s.shape}></span>
                            </div>
                        </div>
                    </div>
                </PageLayout>
            </div>
            <div className={cn(s.mobileMenuContainer,{
                [s._active]: mobileMenu && condition
            })}
            onClick={() => setMobileMenu(false)}
            >
                {menuContent()}
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
            <Modal
                centered
                visible={partners}
                onCancel={() => onShowPartners(false)}
                width={condition ? '100%' : 400}
                footer={null}
                closeIcon={<AppIconCloseModalSmall/>}
            >
                <>
                    <PartnerModal/>
                </>
            </Modal>
        </>

    )
}

export default Header
