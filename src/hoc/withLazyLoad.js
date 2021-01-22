import React from "react"
import Preloader from "../components/common/Preloader/Preloader"

export const withLazyLoad = (Component) => {
    return (props) => (
        <React.Suspense fallback={ <Preloader inBlock={ true }></Preloader> }>
            <Component { ...props }></Component>
        </React.Suspense>
    )
}
