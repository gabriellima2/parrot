import { Button } from '@/components/ui/button'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFourthStep() {
	const { previousStep } = useSignUpFormContext()
	return (
		<div>
			<p>Fourth</p>
			<Button variant="secondary" onClick={previousStep}>
				Previous
			</Button>
			<Button>Finish</Button>
		</div>
	)
}
