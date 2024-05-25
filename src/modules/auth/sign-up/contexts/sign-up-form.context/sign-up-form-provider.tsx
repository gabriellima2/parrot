'use client'

import { useMemo, useState, type PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

import { SignUpFormContext } from './sign-up-form-context'

import { FORM_STEPS } from '@/constants/form-steps'
import { ROUTES } from '@/constants/routes'

import {
	SignUpFirstStepSchema,
	type SignUpFields,
} from '../../schemas/sign-up.schema'
import type { SignUpSteps } from '@/schemas/sign-up-steps'
import type { PlanTypes } from '@/schemas/plan-type'

type SignUpFormProviderProps = PropsWithChildren & {
	initialStep: SignUpSteps
	plan: PlanTypes
}

export function SignUpFormProvider(props: SignUpFormProviderProps) {
	const { initialStep, plan, children } = props
	const [user, setUser] = useState<Partial<SignUpFields>>({ plan })
	const isCompletedFirstStep = SignUpFirstStepSchema.safeParse(user).success
	const [step, setStep] = useState<SignUpSteps>(
		isCompletedFirstStep ? initialStep : 'first'
	)
	const { replace } = useRouter()

	const completedSteps = useMemo(() => {
		const steps = Object.keys(FORM_STEPS.SIGN_UP)
		const index = steps.indexOf(step)
		if (index === 0) return [FORM_STEPS.SIGN_UP.first.value]
		return steps.slice(0, index || 0) as SignUpSteps[]
	}, [step])

	function forwardStep(values: Partial<SignUpFields>) {
		if (step === FORM_STEPS.SIGN_UP.fourth.value) return
		const mappedSteps: { [key in SignUpSteps]?: SignUpSteps } = {
			first: FORM_STEPS.SIGN_UP.second.value,
			second: FORM_STEPS.SIGN_UP.third.value,
			third: FORM_STEPS.SIGN_UP.fourth.value,
		}
		const nextStep = mappedSteps[step] || FORM_STEPS.SIGN_UP.first.value

		setStep(nextStep)
		replace(ROUTES.AUTH.SIGN_UP(plan, nextStep))
		setUser((prevState) => ({ ...prevState, ...values }))
	}

	function previousStep() {
		if (step === FORM_STEPS.SIGN_UP.first.value) return
		const mappedSteps: { [key in SignUpSteps]?: SignUpSteps } = {
			second: FORM_STEPS.SIGN_UP.first.value,
			third: FORM_STEPS.SIGN_UP.second.value,
			fourth: FORM_STEPS.SIGN_UP.third.value,
		}
		const backStep = mappedSteps[step] || FORM_STEPS.SIGN_UP.first.value

		setStep(backStep)
		replace(ROUTES.AUTH.SIGN_UP(plan, backStep))
	}

	return (
		<SignUpFormContext.Provider
			value={{
				step,
				forwardStep,
				previousStep,
				completedSteps,
				user,
			}}
		>
			{children}
		</SignUpFormContext.Provider>
	)
}
