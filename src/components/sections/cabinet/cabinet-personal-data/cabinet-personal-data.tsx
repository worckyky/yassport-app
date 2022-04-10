import s from './cabinet-personal-data.module.scss'
import {useAppSelector} from "../../../../store/hooks";
import {selectMedals} from "../../../../store/slice/medalsSlice";
import {selectCabinetAccount} from "../../../../store/slice/cabinetSlice";
import ResultFragment from "../../../result-fragment/result-fragment";

const CabinetPersonalData = () => {

    const { name, email, gender, lastName, birth } = useAppSelector(selectCabinetAccount);

    return (
        <div className={s.cabinetPersonalData}>
            <div className={s.cabinetPersonalBlock}>
                <h3>About</h3>
                <div className={s.cabinetPersonalWrapper}>
                    <ResultFragment extraStyles={s.cabinetPersonalFragment} name={'Name'} value={name} resize={"page"}/>
                    <ResultFragment extraStyles={s.cabinetPersonalFragment} name={'Last name'} value={lastName} resize={"page"}/>
                    <ResultFragment extraStyles={s.cabinetPersonalFragment} name={'Gender'} value={gender} resize={"page"}/>
                    <ResultFragment extraStyles={s.cabinetPersonalFragment} name={'Birth'} value={birth} resize={"page"}/>
                </div>
            </div>
            <div className={s.cabinetPersonalBlock}>
                <h3>Contacts</h3>
                <div className={s.cabinetPersonalWrapper}>
                    <ResultFragment extraStyles={s.cabinetPersonalFragment} name={'Email'} value={email} resize={"page"}/>
                </div>
            </div>
        </div>
    )
}

export default CabinetPersonalData;
