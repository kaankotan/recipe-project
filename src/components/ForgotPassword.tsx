import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuthenticationContext } from '../contexts/AuthenticationContext'
// @ts-ignore
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>
    const {resetPassword} = useAuthenticationContext()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    //const history = useHistory()

    async function handleSubmit(e: FormEvent) {

        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox etc')
        } catch {
            setError('Failed to reset')
        }
        setLoading(false)
    }

    return (
        <div>
            <Card bg={'info'} text={'white'}>
                <Card.Body>
                    <h2 className="text-center mb-3">Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 shadow btn-success btn-outline-light" type="submit">Reset</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link className="text-light" to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link className="text-info" to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}
