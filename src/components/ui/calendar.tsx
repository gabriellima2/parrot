/* eslint-disable no-unused-vars */
'use client'
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { ptBR } from 'date-fns/locale/pt-BR'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/helpers/cn'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	const isRange = props.mode === 'range'
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('p-3', className)}
			locale={ptBR}
			classNames={{
				months: isRange
					? 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0'
					: '',
				month: 'space-y-4 capitalize ',
				caption: 'flex justify-center pt-1 relative items-center',
				caption_label: 'text-sm font-medium capitalize ',
				nav: 'space-x-1 flex items-center',
				nav_button: cn(
					buttonVariants({ variant: 'outline' }),
					'h-7 w-7 bg-transparent p-0 hover:opacity-100 rounded-md hover:bg-muted'
				),
				nav_button_previous: 'absolute left-1',
				nav_button_next: 'absolute right-1',
				table: 'w-full border-collapse space-y-1',
				head_row: 'flex',
				head_cell:
					' rounded-md w-9 font-normal text-[0.8rem] dark:text-zinc-400',
				row: 'flex w-full mt-2',
				cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-primary-50/50 [&:has([aria-selected])]:bg-primary-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-zinc-800/50 dark:[&:has([aria-selected])]:bg-zinc-800 rounded-md',
				day: cn(
					buttonVariants({ variant: 'ghost' }),
					'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md'
				),
				day_range_end: 'day-range-end',
				day_selected:
					'bg-base-primary hover:!bg-base-primary focus:!bg-base-primary',
				day_outside:
					'day-outside  opacity-50 aria-selected:bg-primary-50/50 aria-selected: aria-selected:opacity-30 dark:text-zinc-400 dark:aria-selected:bg-zinc-800/50 dark:aria-selected:text-zinc-400',
				day_disabled: ' opacity-50 dark:text-zinc-400',
				day_range_middle:
					'aria-selected:bg-primary-50 aria-selected: dark:aria-selected:bg-zinc-800 dark:aria-selected:text-zinc-50',
				day_hidden: 'invisible',
				...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => (
					<ChevronLeft className="h-4 w-4" color="#ffffff" />
				),
				IconRight: ({ ...props }) => (
					<ChevronRight className="h-4 w-4" color="#ffffff" />
				),
			}}
			{...props}
		/>
	)
}
Calendar.displayName = 'Calendar'

export { Calendar }
