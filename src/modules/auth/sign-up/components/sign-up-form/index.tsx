import { SignUpFormFirstStep } from './components/sign-up-form-first-step'
import { SignUpFormSecondStep } from './components/sign-up-form-second-step'
import { SignUpFormThirdStep } from './components/sign-up-form-third-step'
import { SignUpFormFourthStep } from './components/sign-up-form-fourth-step'

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
	return <Step />
}
