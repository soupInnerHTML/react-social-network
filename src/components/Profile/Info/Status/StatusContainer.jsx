import React from 'react'
import { connect } from 'react-redux'
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../../redux/profileReducer'
import { compose } from 'redux'
import StatusInput from './StatusInput'
import Status from './Status'
import { Redirect } from 'react-router-dom'

class StatusClass extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        statusBuffer: ''
    }

    isMyProfile = !this.props.idFromUri

    componentDidUpdate(prevState, prevProps) {
        if (prevProps.status !== this.props.status && !this.state.editMode) {
            this.setState({
                status: this.props.status
            })
        }
    }

    toggleEditMode = (flag) => {
        this.setState({
            editMode: flag
        })
    }

    onStatusClick = () => {

        this.setState({
            statusBuffer: this.state.status
        })

        if (this.isMyProfile) {
            this.toggleEditMode(true)
        }
    }

    setStatus = (values) => {
        if (this.isMyProfile) {
            this.toggleEditMode(false)

            if (this.state.statusBuffer !== values.status) {
                this.props.updateStatusThunkCreator(values.status)
            }
        }
    }

    getStatusJSX() {
        if (this.props.id === +this.props.idFromUri) {
            return <Redirect to='/profile'></Redirect>
        }

        if (this.state.editMode && this.isMyProfile) {
            return (
                <StatusInput initialValues={{ 'status': this.state.status }} onSubmit={this.setStatus}></StatusInput>
            )
        }
        else {
            return (
                <Status onStatusClick={this.onStatusClick} status={this.state.status} isMyProfile={this.isMyProfile}></Status>
            )
        }

    }

    render() {
        return (
            this.getStatusJSX()
        )
    }
}
let mapStateToProps = state => ({
    id: state.auth.id,
    isNotAuth: state.auth.isNotAuth,
    status: state.profilePage.status
})

let mapDispatchToProps = {
    getStatusThunkCreator, updateStatusThunkCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(StatusClass)