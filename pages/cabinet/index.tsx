import {NextPage} from "next";
import PageLayout from "../../src/components/pageLayout/PageLayout";
import Header from "../../src/components/header/header";
import GoBack from "../../src/components/go-back/go-back";
import s from "./cabinet.module.scss"
import Wizard from "../../src/components/wizzard/wizard";
import CabinetContainer from "../../src/components/sections/cabinet/cabinet-container/cabinet-container";
import Footer from "../../src/components/footer/footer"


export enum ESectionType {
    REWARDS = 'Rewards',
    PERSONAL_INFORMATION = 'Personal information'
}

const Cabinet: NextPage = () => {

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
                    <Footer />
                </div>
            </PageLayout>
        </div>
    )
};

export default Cabinet
