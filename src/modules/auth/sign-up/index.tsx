'use client'

import { SignUpFormProgress } from './components/sign-up-form-progress'
import { SignUpFormProvider } from './contexts/sign-up-form.context'
import { SignUpForm } from './components/sign-up-form'
import { BaseLayout } from '@/layouts/base.layout'

import { SignUpSteps } from '@/schemas/sign-up-steps'
import { PlanTypes } from '@/schemas/plan-type'
import { Logo } from '@/components/logo'

type SignUpProps = {
	plan: PlanTypes
	step: SignUpSteps
}

export function SignUp(props: SignUpProps) {
	const { plan, step } = props
	return (
		<SignUpFormProvider initialStep={step} plan={plan}>
			<BaseLayout.Root className="h-auto">
				<BaseLayout.Aside className="h-auto lg:flex lg:justify-between lg:flex-col lg:h-full">
					<SignUpFormProgress />
					<Logo className="hidden lg:block self-center" />
				</BaseLayout.Aside>
				<BaseLayout.Main>
					<SignUpForm />
				</BaseLayout.Main>
			</BaseLayout.Root>
		</SignUpFormProvider>
	)
}
