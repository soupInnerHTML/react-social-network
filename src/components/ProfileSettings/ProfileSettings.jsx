import React, { memo, useState } from "react"
import _ from "./ProfileSettings.module.css"
import cs from "classnames"
import { Field, reduxForm } from "redux-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"


const ProfileSettingsForm = ({ handleSubmit, profileData, error, toggler, observe, }) => {
    console.log("form render")
    let { contacts, aboutMe, lookingForAJobDescription, fullName, } = profileData
    let otherFields = { aboutMe, lookingForAJobDescription, fullName, }

    let getSettingsFields = (object) => (
        Object.keys(object || {}).map(e => {
            return (
                <div key={ e } className={ _.field }>
                    <Field name={ e } component={ "input" } key={ e } placeholder={ e }></Field>
                </div>
            )
        })
    )

    return (
        <form onSubmit={ handleSubmit } className={ _.form }>
            { error && !toggler && observe &&
                <div className={ cs(_.error, _.noticeBlock) } style={ { animation: "fade 1s", } }>
                    <FontAwesomeIcon className={ _.noticeIcon } icon={ faExclamationTriangle } />
                    { error }
                </div> }
            <div className={ _.flex }>
                <div style={ { marginLeft: "6px", } }>{ getSettingsFields(contacts) }</div>
            
                <div>
                    { getSettingsFields(otherFields) }
                    <input type="submit" className={ _.submit } value={ "Изменить" }></input>
                </div>

            </div>
        </form>
    )
}

const ProfileSettingsReduxForm = reduxForm({
    form: "profileSettings",
})(ProfileSettingsForm)


const ProfileSettings = (props) => {
    console.log("component render")
    let { profileData, isFetching, setFetching, } = props
    let { contacts, } = profileData
    let [toggler, setToggle] = useState(false)
    let [observe, setObserve] = useState(false)


    let onSubmit = values => {
        setObserve(true)
        setFetching(false)
        let fields = {
            ...values, 
            contacts: Object.fromEntries(Object.keys(contacts).map(key => [ [key], values[key] ] )),
        }

        console.log(fields)
        props.setProfileMetaTC(fields).then(data => {
            if (data.resultCode === 0) {
                setToggle(true)
                setFetching(true)
            }
            else {
                setToggle(false)
                setFetching(true)
            }
        })
        props.setMyProfile(fields)
    }

    if (profileData.userId) {
        return (
            <main className={ cs("App-main", { fetching: !isFetching, }) } style={ { animation: ".5s fade", } }>
                <section className={ "App-block" }>
                    { toggler &&
                        <div className={ cs(_.success, _.noticeBlock) }>
                            <FontAwesomeIcon icon={ faCheck } className={ _.noticeIcon }/>
                            <span>Настройки профиля успешно сохранены!</span>
                        </div>
                    }
                    <ProfileSettingsReduxForm onSubmit={ onSubmit } initialValues={ Object.assign(profileData, contacts) } { ...{ ...props, toggler, isFetching, observe, } }></ProfileSettingsReduxForm>
                </section>
            </main>
        )
    }

    else {
        return <></>
    }
}

export default memo(ProfileSettings, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))
// ProfileSettings