import { Button } from '@/components/ui/button'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormThirdStep() {
	const { previousStep } = useSignUpFormContext()
	return (
		<div>
			<p>Third</p>
			<Button variant="secondary" onClick={previousStep}>
				Previous
			</Button>
			<Button onClick={() => console.log('Hello')}>Finish</Button>
		</div>
	)
}
