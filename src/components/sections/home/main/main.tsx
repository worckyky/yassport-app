import s from './main.module.scss'
import Button from "../../../button/button";
import AppIconArrowBtn from "../../../app-icons/app-icon-arrowBtn";
import AppAnimatedLogo from "../../../app-icons/logo/app-animated-logo/app-animated-logo";
import {EDeviceType, useWindowSize} from "../../../../helpers/device-helper";
import {useRouter} from "next/router";
import {useAppSelector} from "../../../../store/hooks";
import {selectCheckUser} from "../../../../store/slice/authSlice";
import Link from 'next/link'

const Main = () => {
    const device = useWindowSize()
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET].includes(device as EDeviceType)
    const doCheckUser = useAppSelector(selectCheckUser);

    return (
        <div className={s.main}>
            <div className={s.mainImage}>
                <div className={s.imageContainer}>
                    <div className={s.imageOne}>
                        <img className={s.comment} src="/img/home/main/comment-1.png" alt=""/>
                        <img className={s.view} src="./img/home/main/medal-1.png" alt=""/>
                    </div>
                    <div className={s.imageTwo}>
                        <img className={s.comment} src="/img/home/main/comment-2.png" alt=""/>
                        <img className={s.view} src="./img/home/main/medal-2.png" alt=""/>
                    </div>
                    <div className={s.imageThree}>
                        <img className={s.comment} src="/img/home/main/comment-3.png" alt=""/>
                        <img className={s.view} src="./img/home/main/medal-3.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className={s.mainContent}>
                <AppAnimatedLogo
                    extraStyles={s.mainContentAnimate}
                    color={condition ? 'var(--accent-first)' : 'var(--accent-second)'}
                />
                <h1 className={s.mainTitle}>
                    Your unique digital victories
                </h1>
                <p className={s.mainDescription}>
                    Save all awards and competition results as&nbsp;digital NFT medals
                </p>
                {!doCheckUser.token && (
                    <div className={s.mainButtonContainer}>
                        <Link href={'/registration'}>
                            <Button type='field-primary' size='big'><span className={s.mainExplore}>Sign up</span><AppIconArrowBtn/> </Button>
                        </Link>
                    </div>
                )}

            </div>
        </div>
    )
}

// @ts-ignore
export default Main;
