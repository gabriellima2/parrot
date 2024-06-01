import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type MainProps = HTMLAttributes<HTMLElement>

export function Main(props: MainProps) {
	const { className, ...rest } = props
	return <main className={cn('pl-0 lg:py-6 lg:pr-6', className)} {...rest} />
}
