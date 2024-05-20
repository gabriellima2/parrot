import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFirstStep() {
	const { forwardStep } = useSignUpFormContext()
	return (
		<MultiStepForm.Root>
			<MultiStepForm.Title>First</MultiStepForm.Title>
			<MultiStepForm.PreviousStep disabled />
			<MultiStepForm.ForwardStep onClick={() => forwardStep({})} />
		</MultiStepForm.Root>
	)
}
