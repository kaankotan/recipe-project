import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {NumberState} from "../types";
// it is like useAuth Hook?

export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const { history } = useHistory()

  const amount = useSelector<NumberState, number>(state => state.someNumber)
  const dispatch = useDispatch()

  function incrementNumber() {
    dispatch({type: "INCREMENT"})
  }

  function decrementNumber() {
    dispatch({type: "DECREMENT"})
  }

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to logout!')
    }
  }

  return (
    <>
      <Card>
        <Card.Body className="d-flex flex-row">
          <Button onClick={decrementNumber} >-</Button>
            <h2>{amount}</h2>
          <Button onClick={incrementNumber} >+</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out!
        </Button>
      </div>
    </>
  )
}
