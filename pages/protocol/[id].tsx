import PageLayout from "../../src/components/pageLayout/PageLayout";
import GoBack from "../../src/components/go-back/go-back";
import Header from "../../src/components/header/header";
import Footer from "../../src/components/footer/footer"
import {useRouter} from "next/router";
import ProtocolContainer from "../../src/components/sections/protocol-page/protocol-container";
import {EDeviceType, useWindowSize} from "../../src/helpers/device-helper";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../src/store/hooks";
import {getProtocol, selectProtocol} from "../../src/store/slice/protocolSlice";
import Head from "next/head";


const ResultPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const { id } = router.query
    const {data} = useAppSelector(selectProtocol);

    useEffect(() =>{
        id && dispatch(getProtocol(+id))
    },[id])

    const device = useWindowSize();
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType);
    return (
        <>
            <Head>
                <title>{`Protocol | ${data.athlete.firstName + ' ' + data.athlete.lastName}`}</title>
                <meta name='description' content={`Protocol | ${data.athlete.firstName + ' ' + data.athlete.lastName}`}/>
            </Head>
            <Header/>
            <PageLayout>
                <>
                    {!condition && <GoBack/>}
                    <ProtocolContainer id={id as string}/>
                </>
            </PageLayout>
            <PageLayout>
                <Footer/>
            </PageLayout>
        </>
    )
}

export default ResultPage;
