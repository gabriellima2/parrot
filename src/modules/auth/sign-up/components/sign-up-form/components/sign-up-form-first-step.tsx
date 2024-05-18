import { Button } from '@/components/ui/button'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFirstStep() {
	const { forwardStep } = useSignUpFormContext()
	return (
		<div>
			<p>First</p>
			<Button variant="secondary" disabled>
				Previous
			</Button>
			<Button onClick={() => forwardStep({})}>Next</Button>
		</div>
	)
}
