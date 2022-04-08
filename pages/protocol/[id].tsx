import PageLayout from "../../src/components/pageLayout/PageLayout";
import GoBack from "../../src/components/go-back/go-back";
import Header from "../../src/components/header/header";
import Footer from "../../src/components/footer/footer"
import {useRouter} from "next/router";
import ProtocolContainer from "../../src/components/sections/protocol-page/protocol-container";
import {EDeviceType, useWindowSize} from "../../src/helpers/device-helper";
import AppComponentPreloader from "../../src/components/app-component-preloader/app-component-preloader";
import React from "react";


const ResultPage = () => {

    const router = useRouter()
    const { id } = router.query

    const device = useWindowSize();
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType);
    return (
        <>
            <PageLayout>
                <>
                    <Header/>
                    {!condition && <GoBack/>}
                    <ProtocolContainer id={id as string}/>
                </>
            </PageLayout>
            <Footer/>
        </>
    )
}

export default ResultPage;
