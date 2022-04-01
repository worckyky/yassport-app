import s from './footer.module.scss';
import Image from "next/image";
import PageLayout from "../pageLayout/PageLayout";
import Link from "../link/link";


const Footer = () => {
    return (
        <PageLayout>
            <div className={s.footer}>
                <div className={s.footerLogo}>
                    <Image src={'/img/header/yass-logo.png'} width={200} height={28}/>
                </div>
                <p>© 2022 Yassport, Inc.</p>
                <div className={s.footerLinks}>
                    <Link href={'#'} extraClass={s.footerLink}>Terms of Service</Link>
                    <Link href={'#'} extraClass={s.footerLink}>Privacy Policy</Link>
                    <Link href={'#'} extraClass={s.footerLink}>support@yassport.org</Link>
                </div>
            </div>
        </PageLayout>
    )
}

export default Footer;
