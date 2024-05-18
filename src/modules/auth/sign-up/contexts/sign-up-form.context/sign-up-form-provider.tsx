'use client'

import { useState, type PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

import { SignUpFormContext } from './sign-up-form-context'

import { FORM_STEPS } from '@/constants/form-steps'
import { ROUTES } from '@/constants/routes'

import type { SignUpFields } from '../../schemas/sign-up.schema'
import type { SignUpSteps } from '@/schemas/sign-up-steps'
import type { PlanTypes } from '@/schemas/plan-type'

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
		if (step === FORM_STEPS.SIGN_UP.third) return
		// eslint-disable-next-line no-unused-vars
		const mappedSteps: { [key in SignUpSteps]?: SignUpSteps } = {
			first: FORM_STEPS.SIGN_UP.second,
			second: FORM_STEPS.SIGN_UP.third,
		}
		const nextStep = mappedSteps[step] || FORM_STEPS.SIGN_UP.first

		setStep(nextStep)
		replace(ROUTES.AUTH.SIGN_UP(plan, nextStep))
		setUser((prevState) => ({ ...prevState, ...values }))
	}

	function previousStep() {
		if (step === FORM_STEPS.SIGN_UP.first) return
		// eslint-disable-next-line no-unused-vars
		const mappedSteps: { [key in SignUpSteps]?: SignUpSteps } = {
			second: FORM_STEPS.SIGN_UP.first,
			third: FORM_STEPS.SIGN_UP.second,
		}
		const backStep = mappedSteps[step] || FORM_STEPS.SIGN_UP.first

		setStep(backStep)
		replace(ROUTES.AUTH.SIGN_UP(plan, backStep))
	}

	return (
		<SignUpFormContext.Provider
			value={{ step, forwardStep, previousStep, user }}
		>
			{children}
		</SignUpFormContext.Provider>
	)
}
