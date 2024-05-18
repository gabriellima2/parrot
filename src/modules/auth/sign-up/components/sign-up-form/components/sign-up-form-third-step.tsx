import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormThirdStep() {
	const { previousStep, forwardStep } = useSignUpFormContext()
	return (
		<div>
			<p>Third</p>
			<MultiStepForm.PreviousStepButton onClick={previousStep} />
			<MultiStepForm.ForwardStepButton onClick={() => forwardStep({})} />
		</div>
	)
}
