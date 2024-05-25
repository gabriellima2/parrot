import { SearchViaCepInputDTO, SearchViaCepOutputDTO } from '@/dtos/via-cep.dto'
import { makeViaCepGateway } from '@/gateways/impl/via-cep.gateway'

const gateway = makeViaCepGateway()

export function useViaCep() {
	async function search(
		params: SearchViaCepInputDTO
	): Promise<SafeParseReturnType<SearchViaCepOutputDTO>> {
		try {
			const response = await gateway.search(params)
			return { success: true, data: response }
		} catch (err) {
			return { success: false, error: err as Error }
		}
	}
	return { search }
}
