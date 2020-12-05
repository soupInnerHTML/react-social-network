import { connect } from "react-redux"

export const withUsersQuantity = (Component) => {
    let pureComponent = (props) => (
        <>
            <div className="qtyTab">
                <p className="qtyTab__text">{props.isFriends ? 'Всѣ знакомцы' : 'Персоны'} </p>
                <p className="qtyTab__qty">{props.getUsersQuantity}</p>
            </div>

            <Component></Component>
        </>
    )

    let mapStateToProps = state => ({
        getUsersQuantity: state.users.usersQuantity,
        isFriends: state.users.isFriends
    })

    return connect(mapStateToProps)(pureComponent)
}
