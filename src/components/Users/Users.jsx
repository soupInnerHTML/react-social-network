/* Ultrashort name _ for root styles*/
import _ from './Users.module.css'
import UserContainer from './User/UserContainer';

const Users = (props) => {
    return (
        <main className={`App-main ${props.isFetching && "fetching"} fetched`}>
            {/* <Preloader isFetching={props.isFetching}></Preloader> */}
            <section className={_.friends + " App-block"}>
                <UserContainer></UserContainer>
            </section>
        </main>
    )
}

export default Users