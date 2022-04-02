import Image from "next/image";
import s from './header.module.scss'
import Button from "../button/button";
import AppIconLogin from "../app-icons/app-icon-login";
import {useRouter} from "next/router";

const Header = () => {

    const router = useRouter()

    const onRegister = () => {
        router.push(`/registration`)
    }

    return (
        <div className={s.header}>
            <Image src={'/img/header/yass-logo.png'} width={200} height={28}/>
            <Button
                type={'outline-second'}
                onClick={onRegister}
                size='normal'><AppIconLogin/>
                <span className={s.headerBtnText}>Sign in / Register</span>
            </Button>
        </div>
    )
}

export default Header
