import Image, { type ImageProps } from 'next/image'
import { cn } from '@/helpers/cn'

type LogoProps = Omit<ImageProps, 'src' | 'alt'>

export function Logo(props: LogoProps) {
	const { className, ...rest } = props
	return (
		<Image
			src="/base-logo.svg"
			alt="Parrot"
			width="0"
			height="0"
			className={cn('w-11 h-auto', className)}
			{...rest}
		/>
	)
}
