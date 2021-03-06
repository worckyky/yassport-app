import React from "react";
import {IMedalPropTypes} from "../../../enums/icon-types";


const AppIconSmallCalendar: React.FC<IMedalPropTypes> = ({size= 12}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 11H2.5C2.23478 11 1.98043 10.8946 1.79289 10.7071C1.60536 10.5196 1.5 10.2652 1.5 10V3C1.5 2.73478 1.60536 2.48043 1.79289 2.29289C1.98043 2.10536 2.23478 2 2.5 2H3.5V1H4.5V2H7.5V1H8.5V2H9.5C9.76522 2 10.0196 2.10536 10.2071 2.29289C10.3946 2.48043 10.5 2.73478 10.5 3V10C10.5 10.2652 10.3946 10.5196 10.2071 10.7071C10.0196 10.8946 9.76522 11 9.5 11ZM2.5 5V10H9.5V5H2.5ZM2.5 3V4H9.5V3H2.5Z" fill="#DDBE90"/>
        </svg>

    )
}

export default AppIconSmallCalendar;
