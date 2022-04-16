import s from './footer.module.scss';
import Image from "next/image";
import CustomLink from "../link/link";
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
                <Image src={'/img/header/yass-logo.svg'} width={200} height={28}/>
            </div>
            <p>© 2022 Yassport, Inc.</p>
            <div className={s.footerLinks}>
                {/*<CustomLink href={'#'} extraClass={s.footerLink}>Terms of Service</CustomLink>*/}
                <CustomLink href={'/files/Privacy-policy.pdf'} target={'_blank'} extraClass={s.footerLink}>Privacy Policy</CustomLink>
                <CustomLink href={'mailto:support@yassport.org'} extraClass={s.footerLink}>support@yassport.org</CustomLink>
            </div>
        </div>
    )
}

export default Footer;
