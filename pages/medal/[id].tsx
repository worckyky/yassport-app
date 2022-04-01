import s from './medal-page.module.scss'
import PageLayout from "../../src/components/pageLayout/PageLayout";
import GoBack from "../../src/components/go-back/go-back";
import Header from "../../src/components/header/header"
import MedalContainer from "../../src/components/sections/medal-page/medal-container";
import { useRouter } from 'next/router'
import ResultsTable from "../../src/components/sections/medal-page/results-table/results-table";
import Footer from "../../src/components/footer/footer"

const MedalPage = () => {

    const router = useRouter()
    const { id } = router.query


    return (
        <>
            <PageLayout>
                <>
                    <Header/>
                    <GoBack/>
                    <MedalContainer id={id as string}/>
                </>
            </PageLayout>
            <ResultsTable/>
            <PageLayout>
                <Footer/>
            </PageLayout>
        </>
    )
}

export default MedalPage;
