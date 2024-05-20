import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFirstStep() {
	const { forwardStep } = useSignUpFormContext()
	return (
		<MultiStepForm.Root>
			<MultiStepForm.Header>
				<MultiStepForm.Title>Dados da Empresa</MultiStepForm.Title>
				<MultiStepForm.Description>
					Preencha as informações da sua empresa para configurar sua conta.
				</MultiStepForm.Description>
			</MultiStepForm.Header>
			<MultiStepForm.Grid.Root>
				<MultiStepForm.Grid.Item></MultiStepForm.Grid.Item>
			</MultiStepForm.Grid.Root>
			<MultiStepForm.Footer>
				<MultiStepForm.PreviousStep disabled />
				<MultiStepForm.ForwardStep onClick={() => forwardStep({})} />
			</MultiStepForm.Footer>
		</MultiStepForm.Root>
	)
}
