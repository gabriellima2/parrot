import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFourthStep() {
	const { previousStep } = useSignUpFormContext()
	return (
		<MultiStepForm.Root>
			<MultiStepForm.Title>Fourth</MultiStepForm.Title>
			<MultiStepForm.PreviousStep onClick={previousStep} />
			<MultiStepForm.ForwardStep hasArrowIcon={false}>
				Finalizar
			</MultiStepForm.ForwardStep>
		</MultiStepForm.Root>
	)
}
