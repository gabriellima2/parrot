import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFirstStep() {
	const { forwardStep } = useSignUpFormContext()
	return (
		<div>
			<p>First</p>
			<MultiStepForm.PreviousStepButton disabled />
			<MultiStepForm.ForwardStepButton onClick={() => forwardStep({})} />
		</div>
	)
}
