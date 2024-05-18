import { type Metadata } from 'next'

import { SignUp } from '@/modules/auth/sign-up'
import { PlanTypeSchema } from '@/schemas/plan-type'

export const metadata: Metadata = {
	title: 'Banana - Crie a sua conta',
}

type PageProps = SearchParams<{ p: string }>

export default function Page(props: PageProps) {
	const {
		searchParams: { p: planType },
	} = props
	const plan = PlanTypeSchema.parse(planType ? atob(planType) : undefined)
	return <SignUp plan={plan} />
}
