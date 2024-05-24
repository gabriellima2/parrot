import React from 'react'
import { DropdownProps } from 'react-day-picker'

import {
	Calendar as BaseCalendar,
	type CalendarProps as BaseCalendarProps,
} from '@/components/ui/calendar'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { getValidDateFromISO, getValidISOFromDate } from '@/helpers/date'

export type CalendarProps = Omit<
	BaseCalendarProps,
	'onSelect' | 'selected' | 'defaultMonth' | 'mode' | 'captionLayout'
> & {
	defaultMonth?: string
	value?: string
	onChange?: (date: string) => void
}

export function Calendar(props: CalendarProps) {
	const {
		value,
		defaultMonth,
		onChange,
		fromYear = 2000,
		toYear = 2050,
		classNames,
		components,
		...rest
	} = props
	return (
		<BaseCalendar
			mode="single"
			captionLayout="dropdown-buttons"
			fromYear={fromYear}
			toYear={toYear}
			classNames={{
				vhidden: 'w-full text-center my-2',
				caption_dropdowns: 'w-full flex flex-wrap-reverse items-center gap-3',
				months: '',
				caption:
					'h-fit flex justify-center pt-1 relative items-center flex-row-reverse flex-col',
				nav: 'w-full flex gap-2 justify-between h-full',
				nav_button_previous: '',
				nav_button_next: '',
				nav_icon: 'w-[10px] h-[10px]',
				...classNames,
			}}
			components={{
				Dropdown: ({ value, onChange, children }: DropdownProps) => {
					const options = React.Children.toArray(
						children
					) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[]
					const selected = options.find((child) => child.props.value === value)
					const handleChange = (value: string) => {
						const changeEvent = {
							target: { value },
						} as React.ChangeEvent<HTMLSelectElement>
						onChange?.(changeEvent)
					}
					return (
						<Select
							value={value?.toString()}
							onValueChange={(value) => {
								handleChange(value)
							}}
						>
							<SelectTrigger className="pr-1.5 flex-1 capitalize">
								<SelectValue>{selected?.props?.children}</SelectValue>
							</SelectTrigger>
							<SelectContent position="popper" className="w-auto">
								{options.map((option, id: number) => (
									<SelectItem
										key={`${option.props.value}-${id}`}
										value={option.props.value?.toString() ?? ''}
										className="capitalize"
									>
										{option.props.children}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)
				},
				...components,
			}}
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
