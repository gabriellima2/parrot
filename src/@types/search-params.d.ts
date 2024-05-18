/* eslint-disable no-unused-vars */
type SearchParams<T extends object = object> = {
	searchParams: { [key in keyof T]?: string }
}
