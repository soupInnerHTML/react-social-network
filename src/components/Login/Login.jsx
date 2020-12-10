import React from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators';
import { ValInput } from '../common/FormsControls/FormsControl'

const maxLength30 = maxLengthCreator(30)
const minLength6 = minLengthCreator(6)

const LoginForm = (props) => {
    const { handleSubmit, } = props

    return (


        <section className={'App-block ' + _.loginWrap}>
            <form onSubmit={handleSubmit} className={_.login}>
                <Field component={ValInput} type="text" name="login" placeholder="Телефонъ или емейлъ:" validate={[required, minLength6, maxLength30]}></Field>
                <Field component={ValInput} type="password" name="password" placeholder="Шифръ:" validate={[required, minLength6, maxLength30]}></Field>
                <input type="submit" value="Войти" />
                <Field component={'input'} type="checkbox" name="remeberMe"></Field>
                <label htmlFor="isRemeberMe"> Remember me</label>
            </form>
        </section>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Acc = () => {
    return (
        <div className={_.acc}>
            <FontAwesomeIcon className={_.add} icon={faPlus}></FontAwesomeIcon>
            <p className={_.userName}>Войти в другой</p>
        </div>
    )
}

const Login = props => {
    const onLoginSubmit = values => {
        console.log(values)
    }

    return (
        <main className={'App-main ' + _.main}>
            <section className={'App-block ' + _.content}>
                <h4 className={_.hContent}>Недавно входили на сайт с этого компьютера</h4>
                <p className={_.infoContent}>Чтобы войти снова, нажмите на фотографию или имя.</p>

                <div className={_.accs}>
                    <Acc></Acc>
                    <Acc></Acc>
                    <Acc></Acc>
                </div>

            </section>
            
            <LoginReduxForm onSubmit={onLoginSubmit}></LoginReduxForm>
        </main >
    )
}

export default Login