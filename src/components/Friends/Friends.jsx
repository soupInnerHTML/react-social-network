/* Ultrashort name _ for root styles*/
import _ from './Friends.module.css'
import Friend from "./Friend/Friend";
import Preloader from '../common/Preloader';

const Friends = (props) => {
    return (
        <main className={`App-main`}>
            <Preloader isFetching={props.isFetching}></Preloader>
            <section className={_.friends + " App-block"}>
                {
                    props.friendsData.map(friendData => (
                        <Friend
                            {...friendData}
                            key={friendData.id}
                            follow={props.follow} unfollow={props.unfollow} ></Friend>)
                    )
                }
            </section>
        </main>
    )
}

export default Friends