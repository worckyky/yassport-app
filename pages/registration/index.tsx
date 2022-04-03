import s from './registration.module.scss'
import PageLayout from "../../src/components/pageLayout/PageLayout";
import Footer from "../../src/components/footer/footer"
import Header from "../../src/components/header/header"
import GoBack from "../../src/components/go-back/go-back";
import RegistrationForm from "../../src/components/sections/registration/registration-form/registration-form";


const Registration = () => {
    return (
        <>
            <PageLayout>
                <>
                    <Header/>
                    <GoBack/>
                    <h2 className={s.registrationTitle}>
                       registration
                    </h2>
                    <div className={s.registrationContainer}>
                        <RegistrationForm extraStyles={s.registrationForm}/>
                        <div className={s.registrationContainerIlustraion}>
                        </div>
                    </div>
                </>
            </PageLayout>
            <Footer/>
        </>
    )
}

export default Registration;
