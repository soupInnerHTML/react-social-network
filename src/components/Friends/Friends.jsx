/* Ultrashort name _ for root styles*/
// import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend'
import _ from './Friends.module.css'

const Friends = props => {
    // console.log(props.friendsState.friendsData)
    // debugger
    let friendsObject = props.friendsState.friendsData.map(friendData => <Friend name={friendData.name}
         avatar={friendData.avatar}></Friend>)
    return (
        <main className="App-main">
            <section className={_.friends + " App-block"}>
                {friendsObject}
            </section>
        </main>
    );
}

export default Friends