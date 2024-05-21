import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField } from '@/components/ui/form'
import { MultiStepForm } from '@/components/multi-step-form'
import { DatePickers } from '@/components/date-pickers'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/field'

import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

import { cnpjMask } from '@/helpers/masks'
import { SignUpFields, SignUpSchema } from '../../../schemas/sign-up.schema'

export function SignUpFormFirstStep() {
	const { forwardStep } = useSignUpFormContext()
	const form = useForm<SignUpFields>({
		defaultValues: {},
		resolver: zodResolver(SignUpSchema),
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
				<form onSubmit={form.handleSubmit(console.log)}>
					<MultiStepForm.Grid.Root>
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>Razão Social</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Vitorino Carmanin Comércio LTDA"
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
								name="business_name"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											Nome Fantasia
										</Field.Label>
										<FormControl>
											<Input
												id={field.name}
												placeholder="Ex: Comércio Vitorino"
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
										<Field.Label htmlFor={field.name}>CNPJ</Field.Label>
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
						<MultiStepForm.Grid.Item className="sm:col-span-2">
							<FormField
								control={form.control}
								name="state_registration"
								render={({ field }) => (
									<Field.Root>
										<Field.Label htmlFor={field.name}>
											Inscrição Estadual
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
										<Field.Label htmlFor={field.name}>
											Data de abertura
										</Field.Label>
										<DatePickers.Default.Root>
											<FormControl>
												<DatePickers.Default.Trigger
													date={field.value}
													id={field.name}
												/>
											</FormControl>
											<DatePickers.Default.Content>
												<DatePickers.Default.Calendar
													{...field}
													value={field.value}
												/>
											</DatePickers.Default.Content>
										</DatePickers.Default.Root>
										<Field.Message />
									</Field.Root>
								)}
							/>
						</MultiStepForm.Grid.Item>
					</MultiStepForm.Grid.Root>
					<MultiStepForm.Footer>
						<MultiStepForm.PreviousStep disabled />
						<MultiStepForm.ForwardStep onClick={() => forwardStep({})} />
					</MultiStepForm.Footer>
				</form>
			</Form>
		</MultiStepForm.Root>
	)
}
