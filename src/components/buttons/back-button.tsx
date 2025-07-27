import { Button } from '@mui/material';
import ArrowIconBack from '../icons/arrow-icon-back';
import type { MouseEventHandler } from 'react';

export const BackButton = ({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<Button
			variant='outlined'
			endIcon={<ArrowIconBack />}
			onClick={onClick}
			sx={{
				borderRadius: '8px',
				paddingY: '13px',
				paddingX: '13px',
				textTransform: 'uppercase',
				fontWeight: 600,
				fontSize: '16px',
				letterSpacing: '1px',
				color: '#002D6E',
				borderColor: '#002D6E',
				borderWidth: '2px',
				minWidth: '53px',
				'&:hover': {
					backgroundColor: '#002D6E',
					color: '#fff',
				},

				'& .MuiButton-endIcon': {
					margin: 0,
					transition: 'all 0.3s',
				},

				'@media (min-width:1280px)': {
					fontSize: '16px',
					minWidth: '68px',
				},
			}}
		></Button>
	);
};
