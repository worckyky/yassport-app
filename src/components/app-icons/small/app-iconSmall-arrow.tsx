import React from "react";
import {IMedalPropTypes} from "../../../enums/icon-types";


const AppIconSmallArrow: React.FC<IMedalPropTypes> = ({size= 12}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1.5L7.24997 10.5C7.22804 10.5479 7.19282 10.5884 7.1485 10.6169C7.10418 10.6453 7.05263 10.6604 6.99997 10.6604C6.94732 10.6604 6.89577 10.6453 6.85145 10.6169C6.80713 10.5884 6.77191 10.5479 6.74997 10.5L4.99997 7L1.49997 5.25C1.4521 5.22806 1.41154 5.19284 1.3831 5.14853C1.35466 5.10421 1.33954 5.05266 1.33954 5C1.33954 4.94734 1.35466 4.89579 1.3831 4.85147C1.41154 4.80716 1.4521 4.77194 1.49997 4.75L10.5 1.5Z" stroke="#DDBE90" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default AppIconSmallArrow;
