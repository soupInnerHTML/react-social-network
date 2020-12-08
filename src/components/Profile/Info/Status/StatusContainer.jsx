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

    componentDidMount() {

    }

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

    addTextToState = (el) => {
        this.setState({
            status: el.currentTarget.value
        })
    }

    onInputBlur = (el) => {
        if (!this.props.idFromUri) {
            this.toggleEditMode(false)

            if (this.state.statusBuffer !== this.state.status) {
                this.props.updateStatusThunkCreator(this.state.status)
            }
        }
    }

    onStatusClick = () => {

        this.setState({
            statusBuffer: this.state.status
        })

        if (!this.props.idFromUri) {
            this.toggleEditMode(true)
        }
    }

    getStatusJSX() {
        if (this.props.id === +this.props.idFromUri) {
            return <Redirect to='/profile'></Redirect>
        }

        if (this.state.editMode && !this.props.idFromUri) {
            return (
                <StatusInput addTextToState={this.addTextToState} onInputBlur={this.onInputBlur} status={this.state.status}></StatusInput>
            )
        }
        else {
            return (
                <Status onStatusClick={this.onStatusClick} status={this.state.status} isMyProfile={!this.props.idFromUri}></Status>
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