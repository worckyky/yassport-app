import s from './medal-page.module.scss'
import PageLayout from "../../src/components/pageLayout/PageLayout";
import GoBack from "../../src/components/go-back/go-back";
import Header from "../../src/components/header/header"
import MedalContainer from "../../src/components/sections/medal-page/medal-container";
import { useRouter } from 'next/router'
import ResultsTable from "../../src/components/sections/medal-page/results-table/results-table";
import Footer from "../../src/components/footer/footer"
import {EDeviceType, useWindowSize} from "../../src/helpers/device-helper";
import React, {useEffect} from "react";
import {getMedal, selectMedal} from "../../src/store/slice/medalSlice";
import {useAppDispatch, useAppSelector} from "../../src/store/hooks";
import Head from "next/head";

const MedalPage = () => {

    const router = useRouter()
    const { id } = router.query
    const {
        medal,
        error,
        pending
    } = useAppSelector(selectMedal)

    const device = useWindowSize()
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET, EDeviceType.DESKTOP].includes(device as EDeviceType)
    const dispatch = useAppDispatch();
    useEffect(() =>{
       id && dispatch(getMedal(id as string))
    },[id])

    return (
        <>
            <Head>
                <title>{medal.nameStart}</title>
                <meta name='description' content={medal.nameStart}/>
            </Head>
            <PageLayout>
                <>
                    <Header/>
                    {!condition && <GoBack home/>}
                    <MedalContainer/>
                </>
            </PageLayout>
            <ResultsTable id={id as string}/>
            <PageLayout>
                <Footer/>
            </PageLayout>
        </>
    )
}

export default MedalPage;
