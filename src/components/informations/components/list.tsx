import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type ListProps = HTMLAttributes<HTMLUListElement>

export function List(props: ListProps) {
	const { className, ...rest } = props
	return <ul className={cn('grid grid-cols-4 gap-8', className)} {...rest} />
}
