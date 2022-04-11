import s from './medals.module.scss'
import classnames from 'classnames'
import PageLayout from "../../../pageLayout/PageLayout";
import MedalCard from "../../../medal-card/medal-card";
import Button from "../../../button/button";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {getMedals, selectMedals} from "../../../../store/slice/medalsSlice";
import {useEffect, useState} from "react";
import AppComponentPreloader from "../../../app-component-preloader/app-component-preloader";
import {EMedalType} from "../../../../enums/medal-type";

const cn = classnames.bind(s);

const Medals = () => {

    const [pageMedal, setPageMedal] = useState<EMedalType[]>([]);
    const dispatch = useAppDispatch();

    const {
        medals,
        error,
        pending
    } = useAppSelector(selectMedals)


    useEffect(() => {
        dispatch(getMedals()).then(e => {
                setPageMedal(e.payload.medals)
        } )
    },[])

    const fetchData = (reactComponent: JSX.Element, style?:string ) : JSX.Element => {
        if (pending) {
            return <AppComponentPreloader extraStyles={style}/>
        } else {
            return reactComponent;
        }
    }

    return (
        <div className={s.medals}>
            <PageLayout>
                <>
                    <h2 className={s.medalsTitle}>
                        Medals
                    </h2>
                    {fetchData(
                        <div className={s.medalsContainer}>
                            {pageMedal.map(medal => {
                                return (
                                    <MedalCard medal={medal} key={medal.id} count={pageMedal.length}/>
                                )
                            })}
                        </div>,
                        s.medalContainer
                    )}

                    <Button type='outline-primary' size='big' extraStyles={s.medalsBtnMore}>See more</Button>
                </>
            </PageLayout>
        </div>
    )
}

export default Medals;
