import { ArrowRight } from 'lucide-react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/helpers/cn'

type ForwardStepProps = ButtonProps & {
	hasArrowIcon?: boolean
}

export function ForwardStep(props: ForwardStepProps) {
	const {
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
			variant={variant}
			className={cn('sm:max-w-[165px]', className)}
		>
			{children}
			{hasArrowIcon && <ArrowRight className="ml-2" />}
		</Button>
	)
}
