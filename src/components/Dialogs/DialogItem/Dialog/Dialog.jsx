/* Ultrashort name _ for root styles*/
import { NavLink } from 'react-router-dom';
import _ from './Dialog.module.css'

const Dialog = props => {
    let path = "/dialogs/" + props.dialogState.id

    return (
        // <div className={_.dialogUser}>
            <NavLink to={path} activeClassName={_.active} className={_.dialogUser}>
                <img src={props.dialogState.avatar} alt="" className='avatar' />
                {props.dialogState.name}
            </NavLink>
        // </div>
    );
}

export default Dialog