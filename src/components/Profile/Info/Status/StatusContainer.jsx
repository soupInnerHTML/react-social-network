import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getStatusThunkCreator, updateStatusThunkCreator } from "../../../../redux/profileReducer"
import { compose } from "redux"
import StatusInput from "./StatusInput"
import Status from "./Status"
import { withRouter } from "react-router-dom"
import { getAuthId, getIsNotAuth, getStatus } from "../../../../redux/usersSelectors"

let StatusClass = (props) => {
    let isMyProfile = !props.match.params.userId
    

    let [
        [status, setStatus], 
        [editMode, toggleEditMode], 
        [statusBuffer, setStatusBuffer]
    ] = [
        useState(props.status), 
        useState(false), 
        useState("")
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


    if (editMode && isMyProfile) {
        return (
            <StatusInput initialValues={ { "status": status, } } onSubmit={ setStatusOnSubmit }></StatusInput>
        )
    }
    else {
        return (
            <Status { ...{ onStatusClick, status, isMyProfile, } }></Status>
        )
    }
   

}


let mapStateToProps = state => ({
    id: getAuthId(state),
    isNotAuth: getIsNotAuth(state),
    status: getStatus(state),
})

let mapDispatchToProps = {
    getStatusThunkCreator, updateStatusThunkCreator,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(StatusClass)