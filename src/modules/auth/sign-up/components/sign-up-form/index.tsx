import { Button } from '@/components/ui/button'
import { useSignUpFormContext } from '../../contexts/sign-up-form.context'

export function SignUpForm() {
	const { step, forwardStep, backStep } = useSignUpFormContext()
	if (step === 'second')
		return (
			<div>
				<p>Second</p>
				<Button variant="secondary" onClick={backStep}>
					Previous
				</Button>
				<Button onClick={() => forwardStep({})}>Next</Button>
			</div>
		)
	if (step === 'third')
		return (
			<div>
				<p>Third</p>
				<Button variant="secondary" onClick={backStep}>
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
