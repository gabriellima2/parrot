import { useContext } from 'react'
import { SignUpFormContext } from './sign-up-form-context'

export function useSignUpFormContext() {
	const context = useContext(SignUpFormContext)

	if (!context) {
		throw new Error(
			'useSignUpFormContext should be used within <SignUpFormProvider>'
		)
	}

	return context
}
