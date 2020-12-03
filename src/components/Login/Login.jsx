import { withAuthRedirect } from "../../hoc/withAuthRedirect"

const Login = () => {
    return <h1>Login</h1>
}

export default withAuthRedirect(Login)