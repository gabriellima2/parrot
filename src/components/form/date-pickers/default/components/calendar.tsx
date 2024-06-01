import {
	Calendar as BaseCalendar,
	type CalendarProps as BaseCalendarProps,
} from '@/components/ui/calendar'

import { getValidDateFromISO, getValidISOFromDate } from '@/helpers/date'

export type CalendarProps = Omit<
	BaseCalendarProps,
	'onSelect' | 'selected' | 'defaultMonth' | 'mode'
> & {
	defaultMonth?: string
	value?: string
	onChange?: (date: string) => void
}

export function Calendar(props: CalendarProps) {
	const { value, defaultMonth = value, onChange, ...rest } = props
	return (
		<BaseCalendar
			mode="single"
			defaultMonth={
				defaultMonth ? getValidDateFromISO(defaultMonth) : undefined
			}
			selected={value ? getValidDateFromISO(value) : undefined}
			onSelect={(date) =>
				onChange && onChange(date ? getValidISOFromDate(date) : '')
			}
			{...rest}
		/>
	)
}
