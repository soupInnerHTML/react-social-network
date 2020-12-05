/* Ultrashort name _ for root styles*/
import _ from './Status.module.css'
import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../../../api/api'
import { getStatusThunkCreator } from '../../../../redux/profileReducer'
import { compose } from 'redux'

class Status extends React.Component {
    state = {
        editMode: false,
        // status: 'initial'
    }

    componentDidMount() {
        // console.log(this.props.idFromUri || this.props.id)
        if (this.props.isNotAuth === 0) {
            usersAPI.getStatus(this.props.idFromUri || this.props.id).then(response => {
                this.setState({
                    status: response
                })
            })
        }
    }

    toggleEditMode = (flag) => {
        console.log(this.props.match)
        this.setState({
            editMode: flag
        })
    }



    // getStatus() {
    //     if (this.state.editMode) {
    //         return <input className={_.input} onBlur={() => this.toggleEditMode(false)} autoFocus={true} type="text" value={this.state.status} />
    //     }
    //     else {
    //         return (
    //             <p className={_.status} onClick={() => this.toggleEditMode(true)}>
    //                 <span className={_.hash}># </span>
    //                 {this.state.status}
    //             </p>
    //         )
    //     }
    // }

    render() {
        return (
            // this.getStatus()
            this.state.editMode ? <input className={_.input} onBlur={() => this.toggleEditMode(false)} autoFocus={true} type="text" value={this.state.status} /> :
                <p className={_.status} onClick={() => this.toggleEditMode(true)}>
                    <span className={_.hash}># </span>
                    {this.state.status}
                </p>
        )
    }
}
let mapStateToProps = state => ({
    id: state.auth.id,
    isNotAuth: state.auth.isNotAuth
})

let mapDispatchToProps = {
    getStatusThunkCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Status)