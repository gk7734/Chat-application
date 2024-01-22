import {Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {Link} from "react-router-dom";

export const LoginForm = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <InputContainer>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <InputField type='email' id='email'/>
            </InputContainer>
            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <InputField type='password' id='password'/>
            </InputContainer>
            <Button>Login</Button>
            <div className={styles.footerText}>
                <span>Don't have account? </span>
                <Link to={'/register'}>
                    <span>Register</span>
                </Link>
            </div>
        </form>
    )
}