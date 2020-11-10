/* Ultrashort name _ for root styles*/
// import { NavLink } from 'react-router-dom';
import _ from './Friend.module.css'

const Friend = props => {
    return (
        <div className={_.friend}>
            <img src={props.avatar} className={"avatar " + _.avatar} alt=""/>
            <p className={_.name}>{props.name}</p>
        </div>
    );
}

export default Friend