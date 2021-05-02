import React from 'react'
// @ts-ignore
import { Route, Redirect } from 'react-router-dom'
import { useAuthenticationContext } from '../contexts/AuthenticationContext'

export default function SpecialRoute({ component: Component, ...rest }: any) {
  const { currentUser } = useAuthenticationContext()
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
