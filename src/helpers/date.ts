import { parseISO } from 'date-fns'

export function getValidISOFromDate(date?: Date): string {
	try {
		if (!date) throw new Error()
		if (!isNaN(date.getTime())) return date.toISOString()
		return new Date().toISOString()
	} catch (err) {
		return new Date().toISOString()
	}
}

export function getValidDateFromISO(date?: string): Date {
	const isISO = typeof date === 'string'
	try {
		if (!date) throw new Error()
		if (isISO && !isNaN(parseISO(date).getTime())) return parseISO(date)
		return new Date()
	} catch (err) {
		return new Date()
	}
}
