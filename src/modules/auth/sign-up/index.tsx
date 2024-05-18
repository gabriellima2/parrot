'use client'

import { SignUpFormProvider } from './contexts/sign-up-form.context'
import { SignUpForm } from './components/sign-up-form'

import { SignUpSteps } from '@/schemas/sign-up-steps'
import { PlanTypes } from '@/schemas/plan-type'

type SignUpProps = {
	plan: PlanTypes
	step: SignUpSteps
}

export function SignUp(props: SignUpProps) {
	const { plan, step } = props
	return (
		<SignUpFormProvider initialStep={step} plan={plan}>
			<SignUpForm />
		</SignUpFormProvider>
	)
}
