import { SearchViaCepInputDTO, SearchViaCepOutputDTO } from '@/dtos/via-cep.dto'

export interface ViaCepGateway {
	search(zipCode: SearchViaCepInputDTO): Promise<SearchViaCepOutputDTO>
}
