/* Ultrashort name _ for root styles*/
import _ from "./Preloader.module.css";
import React from "react";
import icon from "../../../img/logoSpinner.png"

const Preloader = (props) => {
    return (
        <div className={ _.wrapper } style={ props.inBlock && { background: "transparent", } }>
            <img src={ icon } className={ _.loader } alt=""/>
        </div>
    )
}

export default Preloader