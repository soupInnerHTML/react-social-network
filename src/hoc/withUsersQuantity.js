import React from 'react'
import { connect } from 'react-redux'
import { getUsersQuantity } from '../redux/usersSelectors'

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
        getUsersQuantity: getUsersQuantity(state),
        isFriends: state.users.isFriends,
    })

    return connect(mapStateToProps)(pureComponent)
}
