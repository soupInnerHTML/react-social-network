import { connect } from "react-redux"

export const withUsersQuantity = (Component) => {
    let pureComponent = (props) => (
        <>
            <div>{props.getUsersQuantity}</div>
            <Component></Component>
        </>
    )

    let mapStateToProps = state => ({
        getUsersQuantity: state.users.usersQuantity
    })

    return connect(mapStateToProps)(pureComponent)
}
