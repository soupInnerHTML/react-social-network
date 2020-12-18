import React from "react"
import _ from "./ProfileSettings.module.css"
import cs from "classnames"
import { Field, reduxForm } from "redux-form"


const ProfileSettingsForm = ({ handleSubmit, profileData, }) => {
    let { contacts, } = profileData
    return (
        <form onSubmit={handleSubmit} className={_.form}>
            {
                Object.keys(contacts || {}).map(e => {
                    console.log(contacts[e])
                    return (
                        <div key={e} className={_.field}>
                            <Field name={e} component={"input"} key={e} defaultValue={contacts[e]} placeholder={e}></Field>
                        </div>
                    )
                })
            }

            <input type="submit" className={_.submit} value={"Изменить"}></input>
        </form>
    )
}

const ProfileSettingsReduxForm = reduxForm({
    form: "profileSettings",
})(ProfileSettingsForm)


const ProfileSettings = (props) => {
    return (
        <main className={ cs("App-main") }>
            <section className={"App-block"}>
                <ProfileSettingsReduxForm {...props}></ProfileSettingsReduxForm>
            </section>
        </main>
    )
}

export default ProfileSettings