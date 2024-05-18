import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormSecondStep() {
	const { previousStep, forwardStep } = useSignUpFormContext()
	return (
		<div>
			<p>Second</p>
			<MultiStepForm.PreviousStepButton onClick={previousStep} />
			<MultiStepForm.ForwardStepButton onClick={() => forwardStep({})} />
		</div>
	)
}
