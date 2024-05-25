import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { MultiStepForm } from '@/components/multi-step-form'
import { Selects } from '@/components/selects'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/field'

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
		<MultiStepForm.Root>
			<MultiStepForm.Header>
				<MultiStepForm.Title>Endereço da Empresa</MultiStepForm.Title>
				<MultiStepForm.Description>
					Preencha as informações de endereço da sua empresa
				</MultiStepForm.Description>
			</MultiStepForm.Header>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(forwardStep)}>
					<MultiStepForm.Grid.Root>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="zip_code"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.zip_code}
										</Field.Label>
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
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="street"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.street}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												readOnly={wasSuccessfulSearchingZipCode}
												placeholder="Ex: Rua João Batista de Melo"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="district"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.district}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												readOnly={wasSuccessfulSearchingZipCode}
												placeholder="Ex: Jardim América - Quarta Parte"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="city"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.city}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												readOnly={wasSuccessfulSearchingZipCode}
												placeholder="Ex: Jales"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="state"
								render={({ field }) => (
									<Field.Root>
										<FormControl>
											<Selects.State
												id={field.name}
												disabled={wasSuccessfulSearchingZipCode}
												label={FIELD_LABELS.SECOND_STEP.state}
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="number"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.number}
										</Field.Label>
										<FormControl>
											<Input id={field.name} placeholder="Ex: 999" {...field} />
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item>
							<FormField
								control={form.control}
								name="complement"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.SECOND_STEP.complement}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Edifício Central"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
					</MultiStepForm.Grid.Root>
					<MultiStepForm.Footer>
						<MultiStepForm.PreviousStep type="button" onClick={previousStep} />
						<MultiStepForm.ForwardStep type="submit" />
					</MultiStepForm.Footer>
				</form>
			</Form>
		</MultiStepForm.Root>
	)
}
