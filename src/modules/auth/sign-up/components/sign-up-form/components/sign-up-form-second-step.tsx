import { Button } from '@/components/ui/button'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormSecondStep() {
	const { previousStep, forwardStep } = useSignUpFormContext()
	return (
		<div>
			<p>Second</p>
			<Button variant="secondary" onClick={previousStep}>
				Previous
			</Button>
			<Button onClick={() => forwardStep({})}>Next</Button>
		</div>
	)
}
