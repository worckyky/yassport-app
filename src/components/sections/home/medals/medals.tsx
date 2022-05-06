import s from './medals.module.scss'
import classnames from 'classnames'
import PageLayout from "../../../pageLayout/PageLayout";
import MedalCard from "../../../medal-card/medal-card";
import Button from "../../../button/button";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {getMedals, resetMedals, selectMedals} from "../../../../store/slice/medalsSlice";
import {useCallback, useEffect, useState} from "react";
import AppComponentPreloader from "../../../app-component-preloader/app-component-preloader";
import {EMedalType} from "../../../../enums/medal-type";

const cn = classnames.bind(s);

const Medals = () => {

    const [pageMedal, setPageMedal] = useState<EMedalType[]>([]);
    const dispatch = useAppDispatch();
    const [initialState, setInitialState] = useState(0);
    useEffect(() => {
        return () => {
            dispatch(resetMedals())
        }
    },[])
    const {
        medals,
        error,
        total,
        pending
    } = useAppSelector(selectMedals)

    const increaseNumber = () => {
        setInitialState(initialState + 1)
    }

    const renderButton = useCallback(() => {
        if (medals.length >= total) {
            return <div className={s.findMedal}> Can't find your medal? <a href="https://forms.gle/H1x9jcwcTLPU5fst9" target={'_blank'}>Click here</a> </div>
        }
        return (
            <Button
                type='outline-primary'
                size='big'
                extraStyles={s.medalsBtnMore}
                onClick={increaseNumber}
            >See more
            </Button>
        )
    },[medals])

    useEffect(() => {
        dispatch(getMedals(initialState))
    },[initialState])

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
                            {medals.map(medal => {
                                return (
                                    <MedalCard medal={medal} key={medal.id} count={pageMedal.length}/>
                                )
                            })}
                        </div>,
                        s.medalContainer
                    )}
                    {renderButton()}
                </>
            </PageLayout>
        </div>
    )
}

export default Medals;
