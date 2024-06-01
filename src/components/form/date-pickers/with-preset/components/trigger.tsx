import { forwardRef } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Button, type ButtonProps } from '@/components/ui/button'
import { PopoverTrigger } from '@/components/ui/popover'

import { cn } from '@/helpers/cn'
import { getValidDateFromISO } from '@/helpers/date'

export type TriggerProps = ButtonProps & {
	date?: string
	placeholder?: string
}
export type TriggerElement = HTMLButtonElement

export const Trigger = forwardRef<TriggerElement, TriggerProps>(
	(props, ref) => {
		const { date, children, placeholder, className, ...rest } = props
		return (
			<PopoverTrigger asChild ref={ref}>
				<Button
					{...rest}
					className={cn(
						'overflow-hidden flex justify-start text-foreground capitalize h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-background',
						className
					)}
				>
					{children || (
						<div className="w-full overflow-hidden flex items-center">
							<CalendarIcon className="mr-2 h-4 w-4 min-h-4 min-w-4" />
							{date ? (
								format(getValidDateFromISO(date), 'LLL dd, y', { locale: ptBR })
							) : (
								<span className="font-normal text-muted-foreground normal-case">
									{placeholder || 'Selecione a data'}
								</span>
							)}
						</div>
					)}
				</Button>
			</PopoverTrigger>
		)
	}
)

Trigger.displayName = 'DatePickers.Default.Trigger'
