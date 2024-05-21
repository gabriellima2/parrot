import { Loader2, type LucideProps } from 'lucide-react'
import { cn } from '@/helpers/cn'

export type LoadingIndicatorProps = LucideProps

export function LoadingIndicator(props: LoadingIndicatorProps) {
	const { className, ...rest } = props
	return (
		<Loader2
			className={cn(className, 'h-4 w-4 min-h-4 min-w-4 animate-spin')}
			{...rest}
		/>
	)
}
