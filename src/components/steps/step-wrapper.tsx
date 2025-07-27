import { useStepForm } from '../../context/use-step-form';

import styles from './step.module.scss';
import { steps } from '../../consts/steps';
import { MainButton } from '../buttons/button';
import { BackButton } from '../buttons/back-button';

const StepWrapper = () => {
	const { currentStep, nextStep, prevStep } = useStepForm();

	const current = steps.find((s) => s.step === currentStep);
	if (!current) return null;

	const StepComponent = current.component;

	return (
		<div className={styles.wrapper}>
			{current.heading && (
				<div className={styles.heading}>
					<h3>{current.heading}</h3>
					{current.require && <span>Обов’язково</span>}
				</div>
			)}
			<div className={styles.stepContent}>
				<StepComponent />
			</div>
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
