import React from 'react'
// @ts-ignore
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }: any) {
  const { currentUser } = useAuth()
  return (
    <Route
    {...rest}
    render={(props: JSX.IntrinsicAttributes) => {
      return currentUser ? <Component {...props} /> : <Redirect to="/login" />
    }}
    >
    </Route>
  )
}
