import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { MultiStepForm } from '@/components/multi-step-form'
import { DatePickers } from '@/components/date-pickers'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/field'

import { useSignUpFormContext } from '@/modules/auth/sign-up/contexts/sign-up-form.context'

import { initializaFirstStepFields } from '@/modules/auth/sign-up/helpers/initialize-first-step-fields'
import { cellPhoneMask, cnpjMask, phoneMask } from '@/helpers/masks'

import {
	SignUpFirstStepSchema,
	type SignUpFirstStepFields,
} from '@/modules/auth/sign-up/schemas/sign-up.schema'
import { FIELD_LABELS } from '@/modules/auth/sign-up/constants/field-labels'

export function SignUpFormFirstStep() {
	const { user, forwardStep } = useSignUpFormContext()
	const form = useForm<SignUpFirstStepFields>({
		defaultValues: initializaFirstStepFields(user),
		resolver: zodResolver(SignUpFirstStepSchema),
	})
	return (
		<MultiStepForm.Root>
			<MultiStepForm.Header>
				<MultiStepForm.Title>Dados da Empresa</MultiStepForm.Title>
				<MultiStepForm.Description>
					Preencha as informações da sua empresa para configurar sua conta.
				</MultiStepForm.Description>
			</MultiStepForm.Header>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(forwardStep)}>
					<MultiStepForm.Grid.Root>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.name}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Lopes Teodoro Empreendimentos EPP"
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
								name="business_name"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.business_name}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Empreendimentos Lopes"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2 md:col-span-1">
							<FormField
								control={form.control}
								name="cnpj"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.cnpj}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: 32.371.741/0001-75"
												mask={cnpjMask}
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="sm:col-span-2 md:col-span-1">
							<FormField
								control={form.control}
								name="state_registration"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.state_registration}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: 270.510.551.309"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item className="md:col-span-2">
							<FormField
								control={form.control}
								name="opening_date"
								render={({ field }) => (
									<Field.Root>
										<FormControl>
											<DatePickers.CommonPreset
												{...field}
												toYear={new Date().getFullYear()}
												fromYear={1900}
												id={field.name}
												label={FIELD_LABELS.FIRST_STEP.opening_date}
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
								name="phone"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.phone}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={phoneMask}
												placeholder="Ex: (13) 3626-7236"
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
								name="cell_phone"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.cell_phone}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												mask={cellPhoneMask}
												placeholder="Ex: (16) 99913-7752"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.email}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: empreendimentos.lopes@geradornv.com.br"
												{...field}
											/>
										</FormControl>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
						<MultiStepForm.Grid.Item>
							<FormField
								control={form.control}
								name="website"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											{FIELD_LABELS.FIRST_STEP.website}
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: www.empreendimentoslopes.com.br"
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
						<MultiStepForm.PreviousStep disabled />
						<MultiStepForm.ForwardStep type="submit" />
					</MultiStepForm.Footer>
				</form>
			</Form>
		</MultiStepForm.Root>
	)
}
