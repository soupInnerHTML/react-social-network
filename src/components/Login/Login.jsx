import React from "react"
import { Field, reduxForm } from "redux-form"
import _ from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { LoginInput } from "../common/FormsControls/FormsControl"


const LoginForm = (props) => {
    const { handleSubmit } = props
    const maxLength10 = maxLengthCreator(10)

    return (


        <section className={"App-block " + _.loginWrap}>
            <form onSubmit={handleSubmit} className={_.login}>
                <Field component={LoginInput} type="text" name="login" placeholder="Телефонъ или емейлъ:" validate={[required]}></Field>
                <Field component={"input"} type="password" name="password" placeholder="Шифръ:"></Field>
                <input type="submit" value="Войти" />
                <Field component={"input"} type="checkbox" name="remeberMe"></Field>
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
        <main className={'App-main ' + _.main}>
            <section className={"App-block " + _.content}>
                <h4 className={_.hContent}>Недавно входили на сайт с этого компьютера</h4>
                <p className={_.infoContent}>Чтобы войти снова, нажмите на фотографию или имя.</p>

                <div className={_.accs}>
                    <div className={_.acc}>
                        <FontAwesomeIcon className={_.add} icon={faPlus}></FontAwesomeIcon>
                        <p className={_.userName}>Войти в другой</p>
                    </div>

                    <div className={_.acc}>
                        <FontAwesomeIcon className={_.add} icon={faPlus}></FontAwesomeIcon>
                        <p className={_.userName}>Войти в другой</p>
                    </div>

                    <div className={_.acc}>
                        <FontAwesomeIcon className={_.add} icon={faPlus}></FontAwesomeIcon>
                        <p className={_.userName}>Войти в другой</p>
                    </div>
                </div>

            </section>
            <LoginReduxForm onSubmit={onLoginSubmit}></LoginReduxForm>
        </main >
    )
}

export default Login