import axios, { type AxiosError } from 'axios'
import { HttpException } from '@/exceptions/http.exception'

const TIMEOUT_IN_MILLISECONDS = 10000 // 10s

const general = axios.create({
	timeout: TIMEOUT_IN_MILLISECONDS,
})

const storage = axios.create({
	timeout: TIMEOUT_IN_MILLISECONDS,
})

storage.interceptors.response.use(
	(response) => response,
	async (err) => {
		const _error = err as AxiosError
		const status = _error.response?.status || _error.status
		const message = _error.message
		return Promise.reject(new HttpException(message, status))
	}
)

export const http = { general, storage }
