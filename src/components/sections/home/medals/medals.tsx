
import s from './medals.module.scss'
import classnames from 'classnames'
import PageLayout from "../../../pageLayout/PageLayout";
import {EMedalType} from "../../../../enums/medal-type";
import MedalCard from "../../../medal-card/medal-card";
import Button from "../../../button/button";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectMedals} from "../../../../store/slice/medalSlice";
const cn = classnames.bind(s);


const Medals = () => {

    const medals = useAppSelector(selectMedals);

    return (
        <div className={s.medals}>
            <PageLayout>
                <>
                    <h2 className={s.medalsTitle}>
                        Medals
                    </h2>
                    <div className={s.medalsContainer}>
                        {medals.map(medal => {
                            return (
                                <MedalCard medal={medal} key={medal.id}/>
                            )
                        })}
                    </div>
                    <Button type='outline-primary' size='big' extraStyles={s.medalsBtnMore}>See more</Button>
                </>
            </PageLayout>
        </div>
    )
}

export default Medals;
