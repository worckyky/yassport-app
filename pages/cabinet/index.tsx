import {NextPage} from "next";
import PageLayout from "../../src/components/pageLayout/PageLayout";
import Header from "../../src/components/header/header";
import GoBack from "../../src/components/go-back/go-back";
import s from "./cabinet.module.scss"
import Wizard from "../../src/components/wizzard/wizard";
import CabinetContainer from "../../src/components/sections/cabinet/cabinet-container/cabinet-container";
import Footer from "../../src/components/footer/footer"
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../src/store/hooks";
import {isAuthUser, selectCheckUser, selectLoginUser, selectRegisterUser} from "../../src/store/slice/authSlice";
import {useEffect} from "react";

export enum ESectionType {
    REWARDS = 'Rewards',
    PERSONAL_INFORMATION = 'Personal information'
}

const Cabinet: NextPage = () => {

    const router = useRouter()
    const doCheckUser = useAppSelector(selectCheckUser).onRegister.error;
    const doLoginCheck = useAppSelector(selectRegisterUser);
    const isAuthed = useAppSelector(isAuthUser);

    useEffect(() => {
        if (doCheckUser) {
            router.push('/')
        }
    },[doCheckUser])

    return (
        <div>
            <PageLayout>
                <div className={s.cabinetWrapper}>
                    <Header/>
                    <GoBack home/>
                    <h1 className={s.cabinetTitle}>Your account</h1>
                    <div className={s.cabinet}>
                        <Wizard sections={[ESectionType.REWARDS, ESectionType.PERSONAL_INFORMATION]}
                                pageURL={'cabinet'}
                                extraStyles={s.cabinetWizard}/>
                        <CabinetContainer extraStyles={s.cabinetContent}/>
                    </div>
                    <Footer extraStyles={s.cabinetFooter}/>
                </div>
            </PageLayout>
        </div>
    )
};

export default Cabinet
