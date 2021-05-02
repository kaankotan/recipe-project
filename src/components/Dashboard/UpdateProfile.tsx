import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuthenticationContext} from '../../contexts/AuthenticationContext'
// @ts-ignore
import {Link, useHistory} from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>
    const passwordConfirmRef = useRef() as MutableRefObject<HTMLInputElement>
    const { currentUser, updateEmail, updatePassword } = useAuthenticationContext()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account ')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div>
            <Card bg={'info'} text={'white'}>
                <Card.Body>
                    <h2 className="text-center mb-3">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                defaultValue={currentUser.email}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                            />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Your New Password</Form.Label>
                            <Form.Control
                                type="password-confirm"
                                ref={passwordConfirmRef}
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className="w-100 shadow btn btn-success"
                            type="submit"
                        >Update</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link className="text-danger" to="/">Cancel</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link className="text-success" to="/signup">Sign Up!</Link>
            </div>
        </div>
    )
}
