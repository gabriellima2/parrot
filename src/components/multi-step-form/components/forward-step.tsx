import { ArrowRight } from 'lucide-react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { LoadingIndicator } from '@/components/loading-indicator'

import { cn } from '@/helpers/cn'

type ForwardStepProps = ButtonProps & {
	hasArrowIcon?: boolean
	isLoading?: boolean
}

export function ForwardStep(props: ForwardStepProps) {
	const {
		isLoading,
		disabled,
		variant = 'default',
		children = 'Passo seguinte',
		hasArrowIcon = true,
		className,
		...rest
	} = props
	return (
		<Button
			type="button"
			{...rest}
			disabled={isLoading || disabled}
			variant={variant}
			className={cn('flex-1 sm:flex-auto sm:max-w-[165px]', className)}
		>
			{isLoading && !hasArrowIcon ? (
				<LoadingIndicator className="ml-2" />
			) : (
				children
			)}
			{!isLoading && hasArrowIcon && <ArrowRight className="ml-2" />}
			{isLoading && hasArrowIcon && <LoadingIndicator className="ml-2" />}
		</Button>
	)
}
