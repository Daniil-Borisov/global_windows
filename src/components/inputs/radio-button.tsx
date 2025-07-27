import styles from './inputs.module.scss';
import { FormControlLabel, Radio, styled } from '@mui/material';
import type { RadioProps } from '@mui/material/Radio';
import type { IRadioButton } from '../../types/types.ts';

const CustomRadio = styled((props: RadioProps) => (
	<Radio
		disableRipple
		{...props}
		icon={<span className='custom-radio' />}
		checkedIcon={<span className='custom-radio checked' />}
	/>
))(() => ({
	padding: 0,
	'& .custom-radio': {
		width: 18,
		height: 18,
		borderRadius: '50%',
		border: '1px solid #454545',
		boxSizing: 'border-box',
		display: 'inline-block',
		transition: 'all 0.2s ease',

		'@media (min-width: 768px)': {
			width: 24,
			height: 24,
		},
	},
	'& .custom-radio.checked': {
		backgroundColor: '#fff',
		border: '6.5px solid #454545',

		'@media (min-width: 768px)': {
			border: '8px solid #454545',
		},
	},
}));

export const RadioButton = ({ item }: { item: IRadioButton }) => {
	return (
		<FormControlLabel
			key={item.value}
			value={item.value}
			className={styles.radioButton}
			control={<CustomRadio />}
			label={
				<div className={styles.option}>
					<div className={styles.description}>
						<h3 className={styles.labelText}>{item.label}</h3>
						{item.subtext && <h4 className={styles.subtext}>{item.subtext}</h4>}
					</div>
					{item.image ? (
						<img src={item.image} alt={item.label} className={styles.thumb} />
					) : null}
				</div>
			}
		/>
	);
};
