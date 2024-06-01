import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type DescriptionProps = HTMLAttributes<HTMLElement>

export function Description(props: DescriptionProps) {
	const { className, ...rest } = props
	return <p className={cn(className)} {...rest} />
}
