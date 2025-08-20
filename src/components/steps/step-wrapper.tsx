import { useStepForm } from '../../context/use-step-form';
import { steps } from '../../consts/steps';
import { MainButton } from '../buttons/button';
import { BackButton } from '../buttons/back-button';
import RadioGroupWrapper from '../inputs/radio-group-wrapper';

import styles from './step.module.scss';
import ContactsStep from './contact-step';
import SummaryCard from './summary-step';

const StepWrapper = () => {
	const { currentStep, nextStep, prevStep } = useStepForm();
	const current = steps.find((s) => s.step === currentStep);
	if (!current) return null;

	const renderStepComponent = () => {
		switch (current.fieldType) {
			case 'radio':
				return <RadioGroupWrapper radioButtons={current.options || []} />;
			case 'contacts':
				return <ContactsStep />;
			case 'summary':
				return <SummaryCard />;
			default:
				return null;
		}
	};

	return (
		<div className={styles.wrapper}>
			{current.heading && (
				<div className={styles.heading}>
					<h3>{current.heading}</h3>
					{current.require && <span>Обов’язково</span>}
				</div>
			)}
			<div className={styles.stepContent}>{renderStepComponent()}</div>
			<div className={styles.btnsWrapper}>
				{currentStep !== 1 ? (
					<BackButton onClick={() => prevStep()} />
				) : (
					<div style={{ width: '53px' }}></div>
				)}
				<MainButton onClick={() => nextStep()} />
			</div>
		</div>
	);
};

export default StepWrapper;
