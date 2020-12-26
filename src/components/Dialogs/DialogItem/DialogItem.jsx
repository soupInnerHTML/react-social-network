/* Ultrashort name _ for root styles*/
import React from "react";
import _ from "./DialogItem.module.css"

const DialogItem = props => {

    return (
        <div className="">
            <div className={_.dialogs}>
                {props.dialogsObject}
            </div>
        </div>

    );
}

export default DialogItem