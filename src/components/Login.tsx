import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

export default function Login () {
	const emailRef = useRef() as MutableRefObject<HTMLInputElement>
	const passwordRef = useRef() as MutableRefObject<HTMLInputElement>
	const { login } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
  const history = useHistory()

	async function handleSubmit(e: FormEvent) {

		e.preventDefault()

		try {
			setError('')
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
		} catch {
			setError('Failed to login')
		}
		setLoading(false)
	}

	return (
		<div>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-3">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} defaultValue={"test@example.com"} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>password</Form.Label>
							<Form.Control type="password" ref={passwordRef} defaultValue={"123123"} required />
						</Form.Group>
						<Button disabled={loading} className="w-100 shadow" type="submit">Log In</Button>
					</Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Don't have an account? <Link to="/signup">Sign Up!</Link>
			</div>
		</div>
	)
}
