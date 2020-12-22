/* Ultrashort name _ for root styles*/
import _ from "./Preloader.module.css";
import React from "react";
import icon from "../../../img/logoSpinner.png"

const Preloader = (props) => {
    let { styles, } = props
    return (
        <div className={_.wrapper}>
            <img src={icon} className={_.loader} {...styles} alt=""/>
        </div>
    )
}

export default Preloader