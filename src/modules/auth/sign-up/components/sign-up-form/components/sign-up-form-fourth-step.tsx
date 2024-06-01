import { Informations } from '@/components/boilerplate/informations'
import { FIELD_LABELS } from '../../../constants/field-labels'
import { MultiStep } from '@/components/form/multi-step'

import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'

export function SignUpFormFourthStep() {
	const { user, previousStep } = useSignUpFormContext()

	function handleFinish() {}

	return (
		<MultiStep.Default.Root>
			<MultiStep.Default.Header>
				<MultiStep.Default.Title>Confirme os dados</MultiStep.Default.Title>
				<MultiStep.Default.Description>
					Confirme os dados antes de finalizar a criação da sua conta.
				</MultiStep.Default.Description>
			</MultiStep.Default.Header>
			<article className="flex flex-col gap-6">
				<Informations.Default.Root className="bg-muted p-6 rounded-xl">
					<Informations.Default.List>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.name}
							value={user.name}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.business_name}
							value={user.business_name}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.FIRST_STEP.cnpj}
							value={user.cnpj}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.FIRST_STEP.state_registration}
							value={user.state_registration}
						/>
						<Informations.Default.ListItem
							className="xl:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.opening_date}
							value={user.opening_date}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.phone}
							value={user.phone}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.cell_phone}
							value={user.cell_phone}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.THIRD_STEP.username}
							value={user.username}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.email}
							value={user.email}
						/>
						<Informations.Default.ListItem
							label={FIELD_LABELS.FIRST_STEP.website}
							value={user.website}
						/>
						<Informations.Default.ListItem
							label={FIELD_LABELS.THIRD_STEP.description}
							value={user.description}
						/>
					</Informations.Default.List>
				</Informations.Default.Root>
				<Informations.Default.Root className="bg-muted p-6 rounded-xl">
					<Informations.Default.Title>
						Endereço da Empresa
					</Informations.Default.Title>
					<Informations.Default.List>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.SECOND_STEP.zip_code}
							value={user.zip_code}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.SECOND_STEP.street}
							value={user.street}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.district}
							value={user.district}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.city}
							value={user.city}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.state}
							value={user.state}
						/>
						<Informations.Default.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.number}
							value={user.number}
						/>
						<Informations.Default.ListItem
							label={FIELD_LABELS.SECOND_STEP.complement}
							value={user.complement}
						/>
					</Informations.Default.List>
				</Informations.Default.Root>
			</article>
			<MultiStep.Default.Footer>
				<MultiStep.Default.PreviousStep type="button" onClick={previousStep} />
				<MultiStep.Default.ForwardStep
					type="button"
					onClick={handleFinish}
					hasArrowIcon={false}
				>
					Finalizar
				</MultiStep.Default.ForwardStep>
			</MultiStep.Default.Footer>
		</MultiStep.Default.Root>
	)
}
