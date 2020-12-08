import React from "react"
import { Field, reduxForm } from "redux-form"
import _ from './Login.module.css'


const LoginForm = (props) => {
    const { handleSubmit } = props

    return (


        <section className={"App-block " + _.loginWrap}>
            <form onSubmit={handleSubmit} className={_.login}>
                <Field component={"input"} type="text" name="login" placeholder="Телефонъ или емейлъ:"></Field>
                <Field component={"input"} type="password" name="password" placeholder="Шифръ:"></Field>
                <input type="submit" value="Войти" />
                <Field component={"input"} type="checkbox" name="isRemeberMe"></Field>
                <label htmlFor="isRemeberMe"> Remember me</label>
            </form>
        </section>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = props => {
    const onLoginSubmit = values => {
        console.log(values)
    }

    return (
        <main className={_.main}>
            <section className={"App-block " + _.content}>
                <h4>Недавно входили на сайт с этого компьютера</h4>
                <p>Чтобы войти снова, нажмите на фотографию или имя.</p>
            </section>
            <LoginReduxForm onSubmit={onLoginSubmit}></LoginReduxForm>
        </main >
    )
}

export default Login