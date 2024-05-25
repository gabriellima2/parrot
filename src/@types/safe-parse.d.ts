type SafeParseSuccess<Output> = {
	success: true
	data: Output
}
type SafeParseError = {
	success: false
	error: Error
}

type SafeParseReturnType<Output> = SafeParseSuccess<Output> | SafeParseError
