import { http } from '@/lib/http'

import { ViaCepException } from '@/exceptions/via-cep.exception'
import { ViaCepGateway } from '../via-cep.gateway'

import { SearchViaCepInputDTO, SearchViaCepOutputDTO } from '@/dtos/via-cep.dto'

class ViaCepGatewayImpl implements ViaCepGateway {
	constructor(private readonly baseUrl: string) {}
	async search(zipCode: SearchViaCepInputDTO): Promise<SearchViaCepOutputDTO> {
		const response = await http.general.get(`${this.baseUrl}/${zipCode}/json/`)
		if (response.data?.erro) throw new ViaCepException()
		return response.data as SearchViaCepOutputDTO
	}
}

export const makeViaCepGateway = () => {
	return new ViaCepGatewayImpl('https://viacep.com.br/ws')
}
