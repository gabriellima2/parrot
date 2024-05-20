import { type HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type TitleProps = HTMLAttributes<HTMLElement>

export function Title(props: TitleProps) {
	const { className, ...rest } = props
	return <h1 className={cn(className)} {...rest} />
}
