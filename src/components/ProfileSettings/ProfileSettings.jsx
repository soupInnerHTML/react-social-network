import React, { memo, useEffect, useState } from "react"
import _ from "./ProfileSettings.module.css"
import cs from "classnames"
import { Field, reduxForm } from "redux-form"


const ProfileSettingsForm = ({ handleSubmit, profileData, error, }) => {
    let { contacts, aboutMe, lookingForAJobDescription, fullName, } = profileData
    let otherFields = { aboutMe, lookingForAJobDescription, fullName, }

    let getSettingsFields = (object) => (
        Object.keys(object || {}).map(e => {
            return (
                <div key={e} className={_.field}>
                    <Field name={e} component={"input"} key={e} placeholder={e}></Field>
                </div>
            )
        })
    )

    return (
        <form onSubmit={handleSubmit} className={_.form}>
            {error &&
                <div className={_.error} style={{ animation: "fade 1s", }}>
                    {error}
                </div>}
            <div className={_.flex}>
                <div>{getSettingsFields(contacts)}</div>
            
                <div>
                    {getSettingsFields(otherFields)}
                    <input type="submit" className={_.submit} value={"Изменить"}></input>
                </div>

            </div>
        </form>
    )
}

const ProfileSettingsReduxForm = reduxForm({
    form: "profileSettings",
})(ProfileSettingsForm)


const ProfileSettings = (props) => {
    let { profileData, isFetching, setFetching, } = props
    let { contacts, } = profileData
    let [toggler, setToggle] = useState(false)

    // console.log(profileData)

    let onSubmit = values => {
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
            <main className={ cs("App-main", { fetching: !isFetching, }) } style={{ animation: ".5s fade", }}>
                <section className={"App-block"}>
                    {toggler && <p>успешно</p>}
                    <ProfileSettingsReduxForm onSubmit={onSubmit} initialValues={Object.assign(profileData, contacts)} {...props}></ProfileSettingsReduxForm>
                </section>
            </main>
        )
    }

    else {
        return <></>
    }
}

export default ProfileSettings
// memo(ProfileSettings, (prevProps, nextProps) => prevProps.profileData.userId === nextProps.profileData.userId) 