import { Button } from '@mui/material';
import ArrowIcon from '../icons/arrow-icon-next';
import type { MouseEventHandler } from 'react';
import { useStepForm } from '../../context/use-step-form';
import { steps } from '../../consts/steps';
import CheckIcon from '../icons/check-icon';

export const MainButton = ({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
	const { currentStep } = useStepForm();

	return (
		<Button
			variant='contained'
			endIcon={currentStep === steps.length ? <CheckIcon /> : <ArrowIcon />}
			onClick={onClick}
			sx={{
				backgroundColor: '#002D6E',
				borderRadius: '8px',
				paddingY: '12px',
				paddingX: '24px',
				textTransform: 'uppercase',
				fontWeight: 600,
				fontSize: '16px',
				letterSpacing: '1px',
				lineHeight: 'normal',
				color: '#fff',
				flex: 1,
				borderColor: '#002D6E',
				'&:hover': {
					backgroundColor: '#5FC874',
					borderColor: '#5FC874',
				},
				'@media (min-width:1280px)': {
					fontSize: '16px',
					paddingY: '24px',
					maxWidth: '336px',
				},
			}}
		>
			{currentStep === steps.length ? 'Підтвердити та надіслати' : 'Далі'}
		</Button>
	);
};
