/* Ultrashort name _ for root styles*/
// import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend'
import _ from './Friends.module.css'

const Friends = props => {
    return (
        <main className="App-main">
            <section className={_.friends + " App-block"}>
                {props.friendsObject}
            </section>
        </main>
    );
}

export default Friends