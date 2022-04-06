import s from './cabinet-results.module.scss'
import {useAppSelector} from "../../../../store/hooks";
import {selectCabinetActivities} from "../../../../store/slice/cabinetSlice";
import CabinetResultsCard from "./cabinet-results-card/cabinet-results-card";


const CabinetResults = () => {

    const activities = useAppSelector(selectCabinetActivities)

    return (
        <div className={s.cabinetResults}>
            {activities.map((activity, i) => {
                return (
                    <CabinetResultsCard activity={activity} key={i}/>
                )
            })}
        </div>
    )
}

export default CabinetResults;
