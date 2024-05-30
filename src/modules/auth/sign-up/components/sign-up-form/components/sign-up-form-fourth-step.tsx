import { MultiStepForm } from '@/components/multi-step-form'
import { useSignUpFormContext } from '../../../contexts/sign-up-form.context'
import { FIELD_LABELS } from '../../../constants/field-labels'
import { Informations } from '@/components/informations'

export function SignUpFormFourthStep() {
	const { user, previousStep } = useSignUpFormContext()

	function handleFinish() {}

	return (
		<MultiStepForm.Root>
			<MultiStepForm.Header>
				<MultiStepForm.Title>Finalizar</MultiStepForm.Title>
				<MultiStepForm.Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</MultiStepForm.Description>
			</MultiStepForm.Header>
			<article className="flex flex-col gap-8">
				<Informations.Root>
					<Informations.List>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.name}
							value={user.name}
						/>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.business_name}
							value={user.business_name}
						/>
						<Informations.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.FIRST_STEP.cnpj}
							value={user.cnpj}
						/>
						<Informations.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.FIRST_STEP.state_registration}
							value={user.state_registration}
						/>
						<Informations.ListItem
							className="xl:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.opening_date}
							value={user.opening_date}
						/>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.phone}
							value={user.phone}
						/>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.cell_phone}
							value={user.cell_phone}
						/>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.THIRD_STEP.username}
							value={user.username}
						/>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.FIRST_STEP.email}
							value={user.email}
						/>
						<Informations.ListItem
							label={FIELD_LABELS.FIRST_STEP.website}
							value={user.website}
						/>
						<Informations.ListItem
							label={FIELD_LABELS.THIRD_STEP.description}
							value={user.description}
						/>
					</Informations.List>
				</Informations.Root>
				<Informations.Root>
					<Informations.Title>Endereço da Empresa</Informations.Title>
					<Informations.List>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.SECOND_STEP.zip_code}
							value={user.zip_code}
						/>
						<Informations.ListItem
							className="sm:col-span-2"
							label={FIELD_LABELS.SECOND_STEP.street}
							value={user.street}
						/>
						<Informations.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.district}
							value={user.district}
						/>
						<Informations.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.city}
							value={user.city}
						/>
						<Informations.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.state}
							value={user.state}
						/>
						<Informations.ListItem
							className="sm:col-span-2 xl:col-span-1"
							label={FIELD_LABELS.SECOND_STEP.number}
							value={user.number}
						/>
						<Informations.ListItem
							label={FIELD_LABELS.SECOND_STEP.complement}
							value={user.complement}
						/>
					</Informations.List>
				</Informations.Root>
			</article>
			<MultiStepForm.Footer>
				<MultiStepForm.PreviousStep type="button" onClick={previousStep} />
				<MultiStepForm.ForwardStep
					type="button"
					onClick={handleFinish}
					hasArrowIcon={false}
				>
					Finalizar
				</MultiStepForm.ForwardStep>
			</MultiStepForm.Footer>
		</MultiStepForm.Root>
	)
}
