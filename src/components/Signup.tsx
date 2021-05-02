import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuthenticationContext } from '../contexts/AuthenticationContext'
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
	const emailRef = useRef() as MutableRefObject<HTMLInputElement>
	const passwordRef = useRef() as MutableRefObject<HTMLInputElement>
	const passwordConfirmRef = useRef() as MutableRefObject<HTMLInputElement>
	const { signup } = useAuthenticationContext()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e: FormEvent) {

		e.preventDefault()
		
		if(passwordRef.current.value !== passwordConfirmRef.current.value) {
			// we just return to stop the function moving
			return setError('Passwords do not match')
		}

		try {
			setError('')
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
			history.push("/")
		} catch {
			setError('Failed to create an account')
		}
		setLoading(false)
	}

	return (
		<div>
			<Card bg={'info'} text={'white'}>
				<Card.Body>
					<h2 className="text-center mb-3">Recipe App - Signup</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label>password-confirm</Form.Label>
							<Form.Control type="password-confirm" ref={passwordConfirmRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100 shadow btn-success btn-outline-light" type="submit">Sign Up</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? <Link className="text-info" to="/login">Log In!</Link>
			</div>
		</div>
	)
}
