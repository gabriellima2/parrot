import { SignUpFormFirstStep } from './components/sign-up-form-first-step'
import { SignUpFormSecondStep } from './components/sign-up-form-second-step'
import { SignUpFormThirdStep } from './components/sign-up-form-third-step'
import { SignUpFormFourthStep } from './components/sign-up-form-fourth-step'
import { SignUpFormProgress } from './components/sign-up-form-progress'

import { useSignUpFormContext } from '../../contexts/sign-up-form.context'
import type { SignUpSteps } from '@/schemas/sign-up-steps'

// eslint-disable-next-line no-unused-vars
const steps: { [key in SignUpSteps]: () => JSX.Element } = {
	first: SignUpFormFirstStep,
	second: SignUpFormSecondStep,
	third: SignUpFormThirdStep,
	fourth: SignUpFormFourthStep,
}

export function SignUpForm() {
	const { step } = useSignUpFormContext()
	const Step = steps[step]
	return (
		<div className="h-screen lg:grid lg:grid-cols-[0.3fr_1fr] gap-6 p-4 lg:p-6">
			<SignUpFormProgress className="w-full overflow-x-auto justify-around lg:justify-normal flex-row lg:flex-col lg:h-full bg-muted p-4 lg:p-6 rounded-3xl" />
			<Step />
		</div>
	)
}
