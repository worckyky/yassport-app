import type {NextPage} from 'next'
import Header from "../src/components/header/header";
import PageLayout from "../src/components/pageLayout/PageLayout";
import Main from "../src/components/sections/home/main/main";
import Medals from "../src/components/sections/home/medals/medals";
import Footer from "../src/components/footer/footer"

const Home: NextPage = () => {
    return (
        <>
            <PageLayout>
                <>
                    <Header/>
                    <Main/>
                </>
            </PageLayout>
            <Medals/>
            <Footer/>
        </>
    )

}

export default Home
