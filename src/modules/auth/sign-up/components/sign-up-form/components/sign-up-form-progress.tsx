import { MultiStepFormProgress } from '@/components/multi-step-form-progress'

import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

import { FORM_STEPS } from '@/constants/form-steps'
import { cn } from '@/helpers/cn'

type SignUpFormProgressProps = {
	className?: string
}

export function SignUpFormProgress(props: SignUpFormProgressProps) {
	const { className } = props
	const { step, completedSteps } = useSignUpFormContext()
	return (
		<MultiStepFormProgress
			step={step}
			steps={Object.values(FORM_STEPS.SIGN_UP)}
			completedSteps={completedSteps}
			className={cn(className)}
		/>
	)
}
