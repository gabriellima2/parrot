import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type RootProps = HTMLAttributes<HTMLElement>

export function Root(props: RootProps) {
	const { className, ...rest } = props
	return <section className={cn('flex flex-col gap-6', className)} {...rest} />
}
