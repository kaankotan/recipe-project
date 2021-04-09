import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)

	function signup(email, password) {
		// this creates user and returns a promise
		return auth.createUserWithEmailAndPassword(email, password)
	}

	function logout() {
		return auth.signOut()
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email)
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password)
	}

	// use useEffect to call this only on startup
	useEffect(() => {
		// I could not understand here much.
		// But we want to unsubscribe from here
		// After the job is done
		const unsubscribe = auth.onAuthStateChanged(user => {
			setLoading(false)
			// this is a firebase auth method. 
			// this is called once firebase 
			// returns the user
			setCurrentUser(user)
		})

		return unsubscribe
	}, [])

	
	const value = {
		currentUser,
		signup,
		login,
		logout,
		resetPassword
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}
