import { PlanTypes } from '@/constants/plan-types'

type SignUpProps = {
	plan: PlanTypes
}

export function SignUp(props: SignUpProps) {
	return <div>Sign Up - Plan === {props.plan}</div>
}
