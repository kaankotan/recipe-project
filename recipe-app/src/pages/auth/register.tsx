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
            .then(auth => {
                logging.info(auth)
                if (auth) {
                    history.push('/')
                }
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
                    <h3>Welcome to Tomateux</h3>
                    <p>Find best food ideas</p>
                </div>

                <div className="register__form">
                    <div>
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

                        </form>

                        <button
                            type="submit"
                            className="register__signInButton"
                            disabled={register}
                            onClick={() => signUpWithEmailAndPassword()}>
                            Continue
                            </button>

                        <ErrorText error={error} /> <br />

                        <span className="tos">
                            By continuing, you agree to our conditions
                            of Use and Privacy Notice.
                        </span>
                    </div>
                </div>

                <div className="a-divider">
                    <small>
                        <p className="a-divider__text">Already have an account?
                        <Link to="/login">
                                <span>Login</span>
                            </Link></p>
                    </small>
                </div>


            </div>

        </div>
    )
}

export default RegisterPage



