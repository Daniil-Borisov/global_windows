import { steps } from '../../consts/steps';
import { useStepForm } from '../../context/use-step-form';
import styles from './step.module.scss';

export default function SummaryCard() {
	const { formData } = useStepForm();

	const getLabel = (stepField: string) => {
		const step = steps.find((s) => s.field === stepField);
		if (!step) return '';
		const value = formData[step.field as keyof typeof formData];
		if (typeof value === 'object' && value !== null) {
			return Object.values(value).join(', ');
		}
		return step?.options?.find((o) => o.value === value)?.label;
	};

	return (
		<div className={styles.summary}>
			{steps
				.filter((s) => s.fieldType === 'radio')
				.map((step) => (
					<div key={step.field} className={styles.item}>
						<p className={styles.label}>{step.summary_field}</p>
						<p className={styles.value}>{getLabel(step.field)}</p>
					</div>
				))}

			<div className={styles.priceWrapper}>
				<span className={styles.priceLabel}>Вартість:</span>
				<span className={styles.priceValue}>65 000 грн</span>
			</div>
		</div>
	);
}
