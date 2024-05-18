import { Button } from '@/components/ui/button'

import { useSignUpFormContext } from '../../contexts/sign-up-form.context'
import { FORM_STEPS } from '@/constants/form-steps'

export function SignUpForm() {
	const { step, forwardStep, previousStep } = useSignUpFormContext()
	if (step === FORM_STEPS.SIGN_UP.second)
		return (
			<div>
				<p>Second</p>
				<Button variant="secondary" onClick={previousStep}>
					Previous
				</Button>
				<Button onClick={() => forwardStep({})}>Next</Button>
			</div>
		)
	if (step === FORM_STEPS.SIGN_UP.third)
		return (
			<div>
				<p>Third</p>
				<Button variant="secondary" onClick={previousStep}>
					Previous
				</Button>
				<Button onClick={() => console.log('Fim')}>Finish</Button>
			</div>
		)
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
