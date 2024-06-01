import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { Fields } from '@/components/boilerplate/fields'
import { MultiStep } from '@/components/form/multi-step'
import { Grids } from '@/components/boilerplate/grids'
import { Selects } from '@/components/form/selects'
import { Input } from '@/components/ui/input'

import { useSignUpFormContext } from '@/modules/auth/sign-up/contexts/sign-up-form.context'
import { useSearchZipCode } from '@/hooks/use-search-zip-code'

import { initializaSecondStepFields } from '@/modules/auth/sign-up/helpers/initialize-second-step-fields'
import { zipCodeMask } from '@/helpers/masks'

import {
	SignUpSecondStepSchema,
	type SignUpSecondStepFields,
} from '@/modules/auth/sign-up/schemas/sign-up.schema'
import { FIELD_LABELS } from '@/modules/auth/sign-up/constants/field-labels'

export function SignUpFormSecondStep() {
	const { user, forwardStep, previousStep } = useSignUpFormContext()
	const form = useForm<SignUpSecondStepFields>({
		defaultValues: initializaSecondStepFields(user),
		resolver: zodResolver(SignUpSecondStepSchema),
	})
	const { handleSearchZipCode, wasSuccessfulSearchingZipCode } =
		useSearchZipCode()

	const fillAddressFieldsByZipCode = useCallback(
		async (zipCode: string) => {
			await handleSearchZipCode(zipCode, (address) => {
				form.setValue('street', address.logradouro)
				form.setValue('district', address.bairro)
				form.setValue('city', address.localidade)
				form.setValue('state', address.uf?.toUpperCase() || '')
				form.clearErrors(['street', 'district', 'city', 'state'])
			})
		},
		[form, handleSearchZipCode]
	)

	return (
		<MultiStep.Default.Root>
			<MultiStep.Default.Header>
				<MultiStep.Default.Title>Endereço da Empresa</MultiStep.Default.Title>
				<MultiStep.Default.Description>
					Preencha as informações de endereço da sua empresa
				</MultiStep.Default.Description>
			</MultiStep.Default.Header>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(forwardStep)}>
					<Grids.Default.Root>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="zip_code"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.zip_code}
										</Fields.Default.Label>
										<FormControl>
											<Input
												{...field}
												id={field.name}
												placeholder="Ex: 15703-054"
												mask={zipCodeMask}
												onChange={(e) => {
													field.onChange(e)
													fillAddressFieldsByZipCode(e.target.value)
												}}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="street"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.street}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												readOnly={wasSuccessfulSearchingZipCode}
												placeholder="Ex: Rua João Batista de Melo"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="district"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.district}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												readOnly={wasSuccessfulSearchingZipCode}
												placeholder="Ex: Jardim América - Quarta Parte"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="city"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.city}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												readOnly={wasSuccessfulSearchingZipCode}
												placeholder="Ex: Jales"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="state"
								render={({ field }) => (
									<Fields.Default.Root>
										<FormControl>
											<Selects.State
												id={field.name}
												disabled={wasSuccessfulSearchingZipCode}
												label={FIELD_LABELS.SECOND_STEP.state}
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="number"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.number}
										</Fields.Default.Label>
										<FormControl>
											<Input id={field.name} placeholder="Ex: 999" {...field} />
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
						<Grids.Default.Item>
							<FormField
								control={form.control}
								name="complement"
								render={({ field }) => (
									<Fields.Default.Root>
										<Fields.Default.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.complement}
										</Fields.Default.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Edifício Central"
												{...field}
											/>
										</FormControl>
										<Fields.Default.Message />
									</Fields.Default.Root>
								)}
							/>
						</Grids.Default.Item>
					</Grids.Default.Root>
					<MultiStep.Default.Footer>
						<MultiStep.Default.PreviousStep
							type="button"
							onClick={previousStep}
						/>
						<MultiStep.Default.ForwardStep type="submit" />
					</MultiStep.Default.Footer>
				</form>
			</Form>
		</MultiStep.Default.Root>
	)
}
