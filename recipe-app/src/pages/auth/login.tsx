import React, { useState } from 'react'
import IPageProps from "../../interfaces/page";
import { useHistory, Link } from 'react-router-dom'
import { auth, Providers } from '../../config/firebase'
import logging from '../../config/logging'
import firebase from 'firebase'
import ErrorText from '../../components/ErrorText'
import '../auth/register.css'
import { SignInWithSocialMedia } from './modules'



const LoginPage: React.FC<IPageProps> = props => {
    const [login, setLogin] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const history = useHistory();

    const signUpWithEmailAndPassword = () => {


        if (error !== '') setError('')
        setLogin(true)

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                logging.info(auth)
                history.push('/')
            })
            .catch(error => {
                logging.error(error)
                setLogin(false)
                setError(error.message)
            })
    }


    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setLogin(true);

        SignInWithSocialMedia(provider)
            .then(result => {
                logging.info(result);
                history.push('/');
            })
            .catch(error => {
                logging.error(error);
                setLogin(false);
                setError(error.message);
            });
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
                            // disabled={login}
                            onClick={() => signUpWithEmailAndPassword()}>
                            Continue
                        </button>

                        <ErrorText error={error} />
                        <p className="register__options">OR</p>

                        <div className="socialmd">
                            <button
                                className="socialBtn"
                                disabled={login}
                                onClick={() => signInWithSocialMedia(Providers.google)}
                            >
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4586 10.2456C20.4586 9.51343 20.3927 8.81284 20.2702 8.13916H10.7936V11.9988L16.2514 12C16.03 13.2842 15.3176 14.3789 14.2261 15.1087V17.6128H17.4748C19.3718 15.869 20.4586 13.2912 20.4586 10.2456Z" fill="#4285F4" />
                                    <path d="M14.2273 15.1088C13.3229 15.7146 12.1584 16.069 10.796 16.069C8.16427 16.069 5.93172 14.3076 5.13219 11.9333H1.78101V14.5158C3.44129 17.7883 6.85371 20.0339 10.796 20.0339C13.5208 20.0339 15.8098 19.1439 17.476 17.6117L14.2273 15.1088Z" fill="#34A853" />
                                    <path d="M4.81657 10.0175C4.81657 9.35087 4.92843 8.70643 5.13214 8.10058V5.51813H1.78096C1.09447 6.87134 0.708252 8.39883 0.708252 10.0175C0.708252 11.6362 1.09565 13.1637 1.78096 14.5169L5.13214 11.9345C4.92843 11.3286 4.81657 10.6842 4.81657 10.0175Z" fill="#FABB05" />
                                    <path d="M10.796 3.96491C12.2832 3.96491 13.615 4.47368 14.6665 5.46783L17.5455 2.61052C15.7969 0.992982 13.5172 0 10.796 0C6.85488 0 3.44129 2.24561 1.78101 5.51812L5.13219 8.10058C5.93172 5.72631 8.16427 3.96491 10.796 3.96491Z" fill="#E94235" />
                                </svg>
                            Continue with Google
                            </button>
                        </div>

                        <span className="tos">
                            By continuing, you agree to our conditions
                            of Use and Privacy Notice.
                        </span>
                    </div>
                </div>

                <div className="a-divider">
                    <small>
                        <p className="a-divider__text">Don't have an account?
                            <Link to="/register">
                                <span> Sign up </span>
                            </Link>
                        </p>
                    </small>
                </div>


            </div>

        </div>
    )
}



export default LoginPage