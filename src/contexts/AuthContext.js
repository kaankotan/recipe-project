import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

// This Context is developed with the help of a tutorial over YouTube.
const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
	// If the current user is not defined, we show login page for PrivateRoutes.
	const [currentUser, setCurrentUser] = useState()
	// Loading to not return any component that depends on Auth Context
	// which would cause undefined variables in components
	const [loading, setLoading] = useState(true)

	function signup(email, password) {
		// this creates user and returns a promise
		return auth.createUserWithEmailAndPassword(email, password)
	}

	function logout() {
		return auth.signOut()
	}

	function updateEmail(email) {
		return currentUser.updateEmail(email)
	}

	function updatePassword(password) {
		return currentUser.updatePassword(password)
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email)
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password)
	}

	// use useEffect to call this only on startup. Adding [] to the end makes it get called only once.
	useEffect(() => {
		// I could not understand here much.
		// But we want to unsubscribe from here
		// After the job is done
		const checkAuthStateChange = auth.onAuthStateChanged(user => {
			setLoading(false)
			// this is a firebase auth method.

			// setCurrentUser is called once firebase returns the user
			setCurrentUser(user)
		})

		return checkAuthStateChange
	}, [])

	
	const value = {
		currentUser,
		signup,
		login,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}
