/* Ultrashort name _ for root styles*/
import _ from './Friends.module.css'
import FriendContainer from './Friend/FriendContainer';
import { withUsersQuantity } from '../../hoc/withUsersQuantity';

const Friends = (props) => {
    return (
        <section className={_.friends + " App-block"}>
            <FriendContainer></FriendContainer>
        </section>
    )
}

export default withUsersQuantity(Friends)