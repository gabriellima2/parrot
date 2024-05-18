'use client'

import { useState, type PropsWithChildren } from 'react'

import { SignUpFormContext } from './sign-up-form-context'

import type { SignUpFields } from '../../schemas/sign-up.schema'
import type { SignUpSteps } from '@/schemas/sign-up-steps'
import type { PlanTypes } from '@/schemas/plan-type'
import { useRouter } from 'next/navigation'

type SignUpFormProviderProps = PropsWithChildren & {
	initialStep: SignUpSteps
	plan: PlanTypes
}

export function SignUpFormProvider(props: SignUpFormProviderProps) {
	const { initialStep, plan, children } = props
	const [step, setStep] = useState<SignUpSteps>(initialStep)
	const [user, setUser] = useState<SignUpFields>({ plan })
	const { replace } = useRouter()

	function forwardStep(values: Partial<SignUpFields>) {
		if (step === 'first') {
			setStep('second')
			replace(`/auth/sign-up?p=${btoa(plan)}&step=${btoa('second')}`)
		}
		if (step === 'second') {
			setStep('third')
			replace(`/auth/sign-up?p=${btoa(plan)}&step=${btoa('third')}`)
		}
		setUser((prevState) => ({ ...prevState, ...values }))
	}

	function backStep() {
		if (step === 'second') {
			setStep('first')
			replace(`/auth/sign-up?p=${btoa(plan)}&step=${btoa('first')}`)
			return
		}
		if (step === 'third') {
			setStep('second')
			replace(`/auth/sign-up?p=${btoa(plan)}&step=${btoa('second')}`)
			return
		}
	}

	return (
		<SignUpFormContext.Provider value={{ step, forwardStep, backStep, user }}>
			{children}
		</SignUpFormContext.Provider>
	)
}
