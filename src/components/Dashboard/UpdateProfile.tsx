import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
// @ts-ignore
import {Link, useHistory} from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>
    const passwordConfirmRef = useRef() as MutableRefObject<HTMLInputElement>
    const { currentUser, updateEmail, updatePassword } = useAuth()
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
            <Card>
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
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                placeholder={"Leave blank to keep the same"}
                            />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>password-confirm</Form.Label>
                            <Form.Control
                                type="password-confirm"
                                ref={passwordConfirmRef}
                                placeholder={"Leave blank to keep the same"}
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className="w-100 shadow"
                            type="submit"
                        >Update</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/">Cancel</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up!</Link>
            </div>
        </div>
    )
}
