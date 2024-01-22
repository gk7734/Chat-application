import {Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = () => {

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <InputField type='email' id='email' {...register('email', {
                    required: 'Email Name is Required'
                })}/>
            </InputContainer>
            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <InputField type='password' id='password' {...register('password', {
                    required: 'Password is Required'
                })}/>
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