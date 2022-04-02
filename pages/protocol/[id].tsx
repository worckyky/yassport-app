import PageLayout from "../../src/components/pageLayout/PageLayout";
import GoBack from "../../src/components/go-back/go-back";
import Header from "../../src/components/header/header";
import Footer from "../../src/components/footer/footer"
import {useRouter} from "next/router";
import ProtocolContainer from "../../src/components/sections/protocol-page/protocol-container";

const ResultPage = () => {

    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <PageLayout>
                <>
                    <Header/>
                    <GoBack/>
                    <ProtocolContainer id={id as string}/>
                </>
            </PageLayout>
            <Footer/>
        </>
    )
}

export default ResultPage;
