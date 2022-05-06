import type {NextPage} from 'next'
import Header from "../src/components/header/header";
import PageLayout from "../src/components/pageLayout/PageLayout";
import Main from "../src/components/sections/home/main/main";
import Medals from "../src/components/sections/home/medals/medals";
import Footer from "../src/components/footer/footer"
import Head from "next/head";

const Home: NextPage = () => {
    return (

        <>
            <Head>
                <title>Your unique digital victories</title>
                <meta name='description' content='Save all awards and competition results as digital NFT medals'/>
            </Head>
            <Header/>
            <PageLayout>
                <>
                    <Main/>
                </>
            </PageLayout>
            <Medals/>
            <PageLayout>
                <Footer/>
            </PageLayout>
        </>
    )

}

export default Home
