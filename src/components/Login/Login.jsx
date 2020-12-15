import React from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from './Login.module.css'
import __ from './../common/FormsControls/FormsControl.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { emailAndPhoneNumberCheck as loginValidator, maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators';
import { ValInput } from '../common/FormsControls/FormsControl'
import plus from '../../img/plus.svg'
import { Redirect } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30)
const minLength6 = minLengthCreator(6)

const LoginForm = (props) => {

    const { handleSubmit, } = props
    const defaultValidators = [required, minLength6, maxLength30]

    return (
        <section className={'App-block ' + _.loginWrap}>
            <form onSubmit={handleSubmit} className={_.login}>
                {props.error &&
                <div className={_.error} style={{animation: 'fade 1s',}}>
                    {props.error}
                </div>}
                <Field component={ValInput} type="text" name="email" placeholder="Телефонъ или емейлъ:" validate={[...defaultValidators, loginValidator]}></Field>
                <Field component={ValInput} type="password" name="password" placeholder="Шифръ:" validate={[...defaultValidators]}></Field>
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
            <img src={plus} className={_.add}/>
            <p className={_.userName}>Войти в другой</p>
        </div>
    )

}

const Login = props => {


    const onLoginSubmit = values => {

        props.loginThunkCreator(values)
    
    }

    if(!props.isNotAuth) {
        return <Redirect to={'/profile'}></Redirect>
    }

    return (
        <main className={'App-main ' + _.main}>
            <section className={'App-block ' + _.content}>
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

            <LoginReduxForm onSubmit={onLoginSubmit}></LoginReduxForm>
        </main >
    )

}

export default Login