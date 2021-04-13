import React, { useState } from 'react'
import IPageProps from '../../interfaces/page'
import { useHistory, Link } from 'react-router-dom'
import { auth } from '../../config/firebase'
import logging from '../../config/logging'
import ErrorText from '../../components/ErrorText'
import '../auth/register.css'


const RegisterPage: React.FC<IPageProps> = props => {

    const [register, setRegister] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')


    const history = useHistory();

    const signUpWithEmailAndPassword = () => {

        if (error !== '') setError('')
        setRegister(true)

        auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                logging.info(result)
                history.push('/login')
            })
            .catch(error => {
                logging.error(error)

                if (error.code.includes('auth/weak-password')) {
                    setError('Please enter a stronger password. ')
                }

                else if (error.code.includes('auth/email-already-in-use')) {
                    setError('Email already in use')
                }

                else {
                    setError('Unable to register.Please try again later')
                }

                setRegister(false)
            })
    }




    return (

        <div className="register">
            <div className="register__container">
                <div className="register__container--title">
                    <h3>Welcome to Foodtaculus</h3>
                    <p>Find best food ideas</p>
                </div>

                <form action="">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        autoComplete="username"
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Create a password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        autoComplete="new-password"
                    />
                    <button
                        type="submit"
                        className="login__signInButton"
                        disabled={register}
                        onClick={() => signUpWithEmailAndPassword()}>
                        Continue
                     </button>

                    <p>
                        By continuing, you agree to Amazon's Conditions
                        of Use and Privacy Notice.
                    </p>
                </form>

                <div className="a-divider a-divider-break">
                    <small>
                        <p className="">Already have an account?
                        <Link to="/login">
                                <span>Login</span>
                            </Link></p>
                    </small>
                </div>

                <ErrorText error={error} />
            </div>

        </div>
    )
}

export default RegisterPage



