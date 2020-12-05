/* Ultrashort name _ for root styles*/
import _ from './Users.module.css'
import UserContainer from './User/UserContainer';
import { withUsersQuantity } from '../../hoc/withUsersQuantity';

const Users = (props) => {
    return (
        <section className={_.friends + " App-block"}>
            <UserContainer></UserContainer>
        </section>
    )
}

export default withUsersQuantity(Users)