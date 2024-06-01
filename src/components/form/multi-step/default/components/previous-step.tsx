import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/helpers/cn'

type PreviousStepProps = ButtonProps

export function PreviousStep(props: PreviousStepProps) {
	const {
		variant = 'secondary',
		children = 'Passo anterior',
		className,
		...rest
	} = props
	return (
		<Button
			type="button"
			{...rest}
			variant={variant}
			className={cn('flex-1 sm:flex-auto sm:max-w-[165px]', className)}
		>
			{children}
		</Button>
	)
}
