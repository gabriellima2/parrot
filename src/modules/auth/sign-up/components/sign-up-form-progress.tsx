import { MultiStep } from '@/components/form/multi-step'

import { useSignUpFormContext } from '../contexts/sign-up-form.context'

import { FORM_STEPS } from '@/constants/form-steps'
import { cn } from '@/helpers/cn'

type SignUpFormProgressProps = {
	className?: string
}

export function SignUpFormProgress(props: SignUpFormProgressProps) {
	const { className } = props
	const { step, completedSteps } = useSignUpFormContext()
	return (
		<MultiStep.Default.Progress
			step={step}
			steps={Object.values(FORM_STEPS.SIGN_UP)}
			completedSteps={completedSteps}
			className={cn(className)}
		/>
	)
}
