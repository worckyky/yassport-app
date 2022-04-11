import s from './footer.module.scss';
import Image from "next/image";
import Link from "../link/link";
import React from "react";
import classnames from 'classnames'
const cn = classnames.bind(s);

type IFooterTypeProps = {
    extraStyles?: string
}

const Footer: React.FC<IFooterTypeProps> = ({extraStyles}) => {
    return (
        <div className={cn(s.footer, extraStyles)}>
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
    )
}

export default Footer;
