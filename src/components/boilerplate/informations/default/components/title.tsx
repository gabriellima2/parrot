import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type TitleProps = HTMLAttributes<HTMLHeadingElement>

export function Title(props: TitleProps) {
	const { className, ...rest } = props
	return <h2 className={cn('text-xl font-medium', className)} {...rest} />
}
