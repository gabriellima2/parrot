import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type RootProps = HTMLAttributes<HTMLElement>

export function Root(props: RootProps) {
	const { className, ...rest } = props
	return <div className={cn('grid grid-cols-4 gap-4', className)} {...rest} />
}
