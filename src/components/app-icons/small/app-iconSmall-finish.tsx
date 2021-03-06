import React from "react";
import {IMedalPropTypes} from "../../../enums/icon-types";

const AppIconSmallFinish: React.FC<IMedalPropTypes> = ({size= 12}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 2.25H4.5V1H5.75V2.25ZM8.25 1H7V2.25H8.25V1ZM4.5 7.25H5.75V6H4.5V7.25ZM10.75 4.75V3.5H9.5V4.75H10.75ZM10.75 7.25V6H9.5V7.25H10.75ZM7 7.25H8.25V6H7V7.25ZM10.75 1H9.5V2.25H10.75V1ZM7 3.5V2.25H5.75V3.5H7ZM3.25 4.75V3.5H4.5V2.25H3.25V1H2V11H3.25V6H4.5V4.75H3.25ZM8.25 6H9.5V4.75H8.25V6ZM5.75 4.75V6H7V4.75H5.75ZM4.5 3.5V4.75H5.75V3.5H4.5ZM7 4.75H8.25V3.5H7V4.75ZM8.25 2.25V3.5H9.5V2.25H8.25Z" fill="#DDBE90"/>
        </svg>

    )
}

export default AppIconSmallFinish
