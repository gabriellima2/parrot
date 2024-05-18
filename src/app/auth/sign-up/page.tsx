import { type Metadata } from 'next'

import { SignUp } from '@/modules/auth/sign-up'
import { SignUpSearchParamsSchema } from '@/modules/auth/sign-up/schemas/search-params.schema'

export const metadata: Metadata = {
	title: 'Banana - Crie a sua conta',
}

type PageProps = SearchParams<{ p: string; step: string }>

export default function Page(props: PageProps) {
	const params = {
		step: props.searchParams.step ? atob(props.searchParams.step) : 'first',
		p: props.searchParams.p ? atob(props.searchParams.p) : undefined,
	}
	const searchParams = SignUpSearchParamsSchema.parse(params)
	return <SignUp plan={searchParams.p} step={searchParams.step} />
}
