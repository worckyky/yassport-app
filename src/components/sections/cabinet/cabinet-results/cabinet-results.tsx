import s from './cabinet-results.module.scss'
import {useAppSelector} from "../../../../store/hooks";
import {selectCabinetResults} from "../../../../store/slice/cabinetSlice";
import CabinetResultsCard from "./cabinet-results-card/cabinet-results-card";
import {useCallback} from "react";
import AppAnimatedLogo from "../../../app-icons/logo/app-animated-logo/app-animated-logo";
import AppComponentPreloader from "../../../app-component-preloader/app-component-preloader";


const CabinetResults = () => {

    const results = useAppSelector(selectCabinetResults)

    const setData = useCallback(() => {
        if (!results.data.length ) {
            return (
                <div className={s.emptyState}>
                    <AppAnimatedLogo extraStyles={s.emptyStateAnimation}/>
                    <h2>No results</h2>
                </div>
            )
        } else if (results.pending) {
            return (
                <>
                    <AppComponentPreloader extraStyles={s.emptyState}/>
                </>
            )
        } else {
            return (
                <>
                    <div className={s.cabinetResults}>
                    {results.data.map((activity, i) => {
                        return (
                            <CabinetResultsCard activity={activity} key={i}/>
                        )
                    })}
                    </div>
                </>
            )
        }
    },[results])


    return (
        <>
            {setData()}
        </>

    )
}

export default CabinetResults;
