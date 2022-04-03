import React from "react";

type IStringCombinerType = string | JSX.Element


const stringCombiner = (array: IStringCombinerType[]) => {
    return (
        <>
            {array.map(elem => {
                return (
                    <>
                        {elem}
                        {' '}
                    </>
                )
            })}
        </>
    )
}
export default stringCombiner

