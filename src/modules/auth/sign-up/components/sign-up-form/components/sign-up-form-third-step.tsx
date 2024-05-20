import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormThirdStep() {
	const { previousStep, forwardStep } = useSignUpFormContext()
	return (
		<MultiStepForm.Root>
			<MultiStepForm.Title>Third</MultiStepForm.Title>
			<MultiStepForm.PreviousStep onClick={previousStep} />
			<MultiStepForm.ForwardStep onClick={() => forwardStep({})} />
		</MultiStepForm.Root>
	)
}
