import { type Metadata } from 'next'

import { SignUp } from '@/modules/auth/sign-up'

import {
	SignUpSearchParamsSchema,
	type SignUpSearchParams,
} from '@/modules/auth/sign-up/schemas/search-params.schema'
import { FORM_STEPS } from '@/constants/form-steps'

export const metadata: Metadata = {
	title: 'Banana - Crie a sua conta',
}

type PageProps = SearchParams<{ p: string; step: string }>

export default function Page(props: PageProps) {
	const { searchParams } = props
	const mappedParams = {
		step: searchParams.step
			? atob(searchParams.step)
			: FORM_STEPS.SIGN_UP.first,
		p: searchParams.p ? atob(searchParams.p) : undefined,
	} as SignUpSearchParams
	const validatedParams = SignUpSearchParamsSchema.parse(mappedParams)
	return <SignUp plan={validatedParams.p} step={validatedParams.step} />
}
