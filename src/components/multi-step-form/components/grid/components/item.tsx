import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type ItemProps = HTMLAttributes<HTMLElement>

export function Item(props: ItemProps) {
	const { className, ...rest } = props
	return <div className={cn('col-span-full', className)} {...rest} />
}
