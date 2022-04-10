import PageLayout from "../../src/components/pageLayout/PageLayout";
import GoBack from "../../src/components/go-back/go-back";
import Header from "../../src/components/header/header";
import Footer from "../../src/components/footer/footer"
import {useRouter} from "next/router";
import ProtocolContainer from "../../src/components/sections/protocol-page/protocol-container";
import {EDeviceType, useWindowSize} from "../../src/helpers/device-helper";
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../src/store/hooks";
import {getProtocol, selectProtocol} from "../../src/store/slice/protocolSlice";


const ResultPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [container, setShowContainer] = useState(false);
    const { id } = router.query

    useEffect(() =>{
        id && dispatch(getProtocol(+id)).then(() => setShowContainer(true))
    },[id])

    const device = useWindowSize();
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType);
    return (
        <>
            <PageLayout>
                <>
                    <Header/>
                    {!condition && <GoBack/>}
                    {container && <ProtocolContainer id={id as string}/>}
                </>
            </PageLayout>
            <Footer/>
        </>
    )
}

export default ResultPage;
