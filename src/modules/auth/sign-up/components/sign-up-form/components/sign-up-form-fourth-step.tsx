import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFourthStep() {
	const { previousStep } = useSignUpFormContext()
	return (
		<div>
			<p>Fourth</p>
			<MultiStepForm.PreviousStepButton onClick={previousStep} />
			<MultiStepForm.ForwardStepButton hasArrowIcon={false}>
				Finalizar
			</MultiStepForm.ForwardStepButton>
		</div>
	)
}
