import s from './main.module.scss'
import Button from "../../../button/button";
import AppIconArrowBtn from "../../../app-icons/app-icon-arrowBtn";

const Main = () => {
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
                <h1 className={s.mainTitle}>
                    Your unique digital victories
                </h1>
                <p className={s.mainDescription}>
                    Save all awards and competition results <br/> as digital NFT medals
                </p>
                <div className={s.mainButtonContainer}>
                    <Button type='outline-primary' size='big' extraStyles={s.mainRegister}>Register</Button>
                    <Button type='field-primary' size='big'><span className={s.mainExplore}>Explore</span><AppIconArrowBtn/> </Button>
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
export default Main;
