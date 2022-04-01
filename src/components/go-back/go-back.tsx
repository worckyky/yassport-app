import s from './go-back.module.scss'
import {useRouter} from "next/router";
import AppIconArrowLeft from "../app-icons/app-icon-arrowLeft";

const GoBack = () => {

    const router = useRouter();


    return (
        <div className={s.goBack} onClick={() => router.back()}>
            <AppIconArrowLeft/> <span>Go back</span>
        </div>
    )
}

export default GoBack
