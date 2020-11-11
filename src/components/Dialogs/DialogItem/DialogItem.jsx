/* Ultrashort name _ for root styles*/
// import { NavLink } from 'react-router-dom';
import _ from './DialogItem.module.css'
import Dialog from './Dialog/Dialog'

const DialogItem = props => {
    // let dialogsObject = props.dialogsData.map(dialogsData => {
    //     return (
    //         <Dialog dialogState={dialogsData}></Dialog>
    //     )
    // })

    return (
        <div className="">
            <div className={_.dialogs}>
                {/* mb need to {_.active}  */}
                {/* {dialogsObject} */}
            </div>
        </div>

    );
}

export default DialogItem