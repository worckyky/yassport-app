import React from "react";

type IStringCombinerType = string | JSX.Element


const stringCombiner = (array: IStringCombinerType[]) => {
    return (
        <>
            {array.map((elem, i) => {
                return (
                    <React.Fragment key={i}>
                        {elem}
                        {' '}
                    </React.Fragment>
                )
            })}
        </>
    )
}
export default stringCombiner

