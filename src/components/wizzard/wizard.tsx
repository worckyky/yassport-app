
import s from './wizard.module.scss'
import classnames from 'classnames'
const cn = classnames.bind(s);
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {ESectionType} from "../../../pages/cabinet";

type IWizardPropsType = {
    extraStyles?: string
    sections: Array<string>
    pageURL: string
}

const Wizard:React.FC<IWizardPropsType> = ({sections, extraStyles, pageURL}) => {


    const router = useRouter()
    const { tab } = router.query
    const [selectTab, setSelectTab] = useState('');

    useEffect(() => {
        tab ? setSelectTab(tab as string) : router.push({
            query: { tab: sections[0] },
        })
    },[tab])


    return (
            <div className={cn(s.wizard, extraStyles)}>
                {sections.map((item,i) => {
                    return (
                        <Link href={
                            {
                                pathname: `/${pageURL}`,
                                query: {tab: item}
                            }}
                            key={i}>
                            <div className={cn(s.wizardItem , {
                                [s.wizardItemActive] : selectTab === item
                            })}>
                                {item}
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
}

export default Wizard;
