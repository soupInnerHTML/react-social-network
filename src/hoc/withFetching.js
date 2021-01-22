import React, { useState } from "react"


export const withFetching = (initialState = true) => (Component) => {
    return (props) => {
        let [isFetching, setFetching] = useState(initialState)
        return (
            <Component { ...{ isFetching, setFetching, ...props, } }></Component>
        )
    }
}