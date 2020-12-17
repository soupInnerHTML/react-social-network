import React, { useState } from "react"


export const withFetching = (initialState = true) => (Component) => {
    return () => {
        let [isFetching, setFetching] = useState(initialState)
        return (
            <Component {...{ isFetching, setFetching, }}></Component>
        )
    }
}
