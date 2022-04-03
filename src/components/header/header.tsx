import Image from "next/image";
import s from './header.module.scss'
import Button from "../button/button";
import AppIconLogin from "../app-icons/app-icon-login";
import {EDeviceType, useWindowSize} from "../../helpers/device-helper";
import AppMobileLogo from "../app-icons/logo/app-mobile-logo";

const Header = () => {
    const device = useWindowSize()

    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET].includes(device as EDeviceType)

    return (
        <div className={s.header}>
            {condition ? <AppMobileLogo/> : <Image src={'/img/header/yass-logo.png'} width={200} height={28}/>}
            {device === EDeviceType.MOBILE ? <div className={s.headerLoginIcon}> <AppIconLogin/></div> : <Button type={'outline-second'} size='normal'><AppIconLogin/> <span className={s.headerBtnText}>Sign in / Register</span></Button>}
        </div>
    )
}

export default Header
