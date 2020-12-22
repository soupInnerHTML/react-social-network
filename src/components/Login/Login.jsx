import React, { useState } from "react"
import { Field, reduxForm } from "redux-form"
import _ from "./Login.module.css"
import __ from "./../common/FormsControls/FormsControl.module.css"
import { emailAndPhoneNumberCheck as loginValidator, maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { ValInput } from "../common/FormsControls/FormsControl"
import plus from "../../img/plus.svg"
import { Redirect } from "react-router-dom";
import cs from "classnames"
import { withFetching } from "../../hoc/withFetching";

const maxLength50 = maxLengthCreator(50)
const minLength3 = minLengthCreator(3)

const LoginForm = (props) => {

    const { handleSubmit, captcha, } = props
    const defaultValidators = [required, maxLength50, minLength3]

    // console.log(props.captcha)

    return (
        <section className={cs("App-block", _.loginWrap)}>
            <form onSubmit={handleSubmit} className={_.login}>
                {props.error &&
                <div className={_.error} style={{ animation: "fade 1s", }}>
                    {props.error}
                </div>}
                
                <Field component={ValInput} type="text" name="email" placeholder="Телефонъ или емейлъ:" validate={[...defaultValidators, loginValidator]}></Field>
                <Field component={ValInput} type="password" name="password" placeholder="Шифръ:" validate={[...defaultValidators]}></Field>
                <input type="submit" value="Войти" />

                {captcha && <div>
                    <img src={captcha} alt="" style={{ width: "100%", }}/>
                    <Field component={ValInput} name="captcha" placeholder="Введите капчу" validate={[required]}></Field>
                </div>}

                <Field component={"input"} type="checkbox" name="remeberMe"></Field>
                <label htmlFor="isRemeberMe"> Remember me</label>
            </form>
        </section>
    )

}

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm)

const Acc = () => {
    return (
        <div className={_.acc}>
            <img src={plus} className={_.add}/>
            <p className={_.userName}>Войти в другой</p>
        </div>
    )
}

const Login = ({ loginThunkCreator, isNotAuth, init, captcha, ...props }) => {
    const [isFetching, setFetching] = useState(false)
    
    const onLoginSubmit = values => {
        let delayToFetch = setTimeout(() => setFetching(true), 1000)
        
        loginThunkCreator(values).then(() => {
            clearTimeout(delayToFetch)
            setFetching(false)
        })
    }

    if (!isNotAuth) {
        return <Redirect to={"/profile"}></Redirect>
    }

    return (
        <main className={cs("App-main", _.main, { "fetching": isFetching, })}>
            <section className={cs("App-block", _.content)}>
                <div className={_.info}>
                    <h4 className={_.hContent}>Недавно входили на сайт с этого компьютера</h4>
                    <p className={_.infoContent}>Чтобы войти снова, нажмите на фотографию или имя.</p>
                </div>

                <div className={_.accs}>
                    <Acc></Acc>
                    <Acc></Acc>
                    <Acc></Acc>
                </div>

            </section>

            <LoginReduxForm onSubmit={onLoginSubmit} {...{ captcha, }}></LoginReduxForm>
        </main >
    )
}

export default Login