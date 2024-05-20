'use client'

import { SignUpFormProgress } from './components/sign-up-form-progress'
import { SignUpFormProvider } from './contexts/sign-up-form.context'
import { SignUpForm } from './components/sign-up-form'
import { BaseLayout } from '@/layouts/base.layout'

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
			<BaseLayout.Root>
				<BaseLayout.Aside className="h-auto justify-around lg:justify-normal flex-row lg:flex-col lg:h-full">
					<SignUpFormProgress />
				</BaseLayout.Aside>
				<BaseLayout.Main>
					<SignUpForm />
				</BaseLayout.Main>
			</BaseLayout.Root>
		</SignUpFormProvider>
	)
}
