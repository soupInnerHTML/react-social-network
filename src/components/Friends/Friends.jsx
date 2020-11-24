/* Ultrashort name _ for root styles*/
import _ from './Friends.module.css'
import Preloader from '../common/Preloader';
import FriendContainer from './Friend/FriendContainer';

const Friends = (props) => {
    return (
        <main className={`App-main ${props.isFetching && "fetching"} fetched`}>
            {/* <Preloader isFetching={props.isFetching}></Preloader> */}
            <section className={_.friends + " App-block"}>
                <FriendContainer></FriendContainer>
            </section>
        </main>
    )
}

export default Friends