import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import firebase from 'firebase';
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'
import { RecipeType } from '../types';

export default function Login () {
	const nameRef = useRef() as MutableRefObject<HTMLInputElement>
	const ingredientsRef = useRef() as MutableRefObject<HTMLInputElement>
  const methodRef = useRef() as MutableRefObject<HTMLInputElement>
	const { login } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
  const history = useHistory()

	async function handleSubmit(e: FormEvent) {

		e.preventDefault()
    setLoading(true)
    const customRecipesRef = firebase.database().ref("CustomRecipes")
    const customRecipe: RecipeType = {
      name: nameRef.current.value,
      ingredients: ingredientsRef.current.value,
      method: methodRef.current.value
    }
    try {
      await customRecipesRef.push(customRecipe)
      history.push("/")
    } catch {
      setError('Failed to submit')
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
						<Form.Group id="name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="name" ref={nameRef} required />
						</Form.Group>
						<Form.Group id="ingredients">
							<Form.Label>Ingredients</Form.Label>
							<Form.Control type="ingredients" ref={ingredientsRef} required />
						</Form.Group>
            <Form.Group id="method">
							<Form.Label>Method</Form.Label>
							<Form.Control type="method" ref={methodRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100" type="submit">Submit</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}
