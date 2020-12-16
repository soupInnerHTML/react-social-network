import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getStatusThunkCreator, updateStatusThunkCreator } from '../../../../redux/profileReducer'
import { compose } from 'redux'
import StatusInput from './StatusInput'
import Status from './Status'
import { Redirect } from 'react-router-dom'

let StatusClass = (props) => {
    let isMyProfile = !props.idFromUri
    

    let [
        [status, setStatus], 
        [editMode, toggleEditMode], 
        [statusBuffer, setStatusBuffer]
    ] = [
        useState(props.status), 
        useState(false), 
        useState('')
    ]

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    let onStatusClick = () => {

        setStatusBuffer(status)

        if (isMyProfile) {
            toggleEditMode(true)
        }
    }

    let setStatusOnSubmit = (values) => {
        if (isMyProfile) {
            toggleEditMode(false)

            if (statusBuffer !== values.status) {
                props.updateStatusThunkCreator(values.status)
            }
        }
    }

    let getStatusJSX = () => {
        if (props.id === +props.idFromUri) {
            return <Redirect to='/profile'></Redirect>
        }

        if (editMode && isMyProfile) {
            return (
                <StatusInput initialValues={{ 'status': status, }} onSubmit={setStatusOnSubmit}></StatusInput>
            )
        }
        else {
            return (
                <Status {...{ onStatusClick, status, isMyProfile, }}></Status>
            )
        }

    }

   
    return getStatusJSX()
}


let mapStateToProps = state => ({
    id: state.auth.id,
    isNotAuth: state.auth.isNotAuth,
    status: state.profilePage.status,
})

let mapDispatchToProps = {
    getStatusThunkCreator, updateStatusThunkCreator,
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(StatusClass)