import React from "react";


const AppIconArrowBtnLong: React.FC<{width?: string}> = ({width= '112'}) => {
    return (
        <svg width={width} height="16" viewBox="0 0 112 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M110.357 8.35355C110.552 8.15829 110.552 7.84171 110.357 7.64645L107.175 4.46447C106.98 4.2692 106.663 4.2692 106.468 4.46447C106.273 4.65973 106.273 4.97631 106.468 5.17157L109.296 8L106.468 10.8284C106.273 11.0237 106.273 11.3403 106.468 11.5355C106.663 11.7308 106.98 11.7308 107.175 11.5355L110.357 8.35355ZM0.996582 8.5L110.003 8.5V7.5L0.996582 7.5V8.5Z" fill="#A3A3A3"/>
        </svg>

    )
}

export default AppIconArrowBtnLong
