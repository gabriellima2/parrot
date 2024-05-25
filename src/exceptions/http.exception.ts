export class HttpException extends Error {
	public readonly status?: number
	constructor(message?: string, status?: number) {
		super(message || 'An unknown error has occurred. Please try again')
		this.status = status
		this.name = 'HttpException'
	}
}
