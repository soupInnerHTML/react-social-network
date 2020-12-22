import React from "react"
import _ from "./ProfileSettings.module.css"
import cs from "classnames"
import { Field, reduxForm } from "redux-form"
import Preloader from "../common/Preloader/Preloader"


const ProfileSettingsForm = ({ handleSubmit, profileData, }) => {
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
    let { profileData, } = props
    let { contacts, } = profileData
    let toggler = false

    let onSubmit = values => {
        console.log(values)
        toggler = true
        props.setProfileMeta(values).then(() => toggler = false)
    }

    return (
        <main className={ cs("App-main", { "fetching": toggler, }) }>
            <section className={"App-block"}>
                {props.isFetching ? 
                    <ProfileSettingsReduxForm onSubmit={onSubmit} initialValues={Object.assign(profileData, contacts) || {}} {...props}></ProfileSettingsReduxForm> :
                    <Preloader innerStyle={{ background: "none", }}></Preloader>}
            </section>
        </main>
    )
}

export default ProfileSettings