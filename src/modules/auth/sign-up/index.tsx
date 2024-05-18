'use client'

import { SignUpFormProvider } from './contexts/sign-up-form.context'

import { SignUpSteps } from '@/schemas/sign-up-steps'
import { PlanTypes } from '@/schemas/plan-type'
import { SignUpForm } from './components/sign-up-form'

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
