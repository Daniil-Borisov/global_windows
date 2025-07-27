import { Box, Slider, TextField, Typography } from '@mui/material';
import styles from './inputs.module.scss';

interface SliderWithInputProps {
	label: string;
	sublabel: string;
	required?: boolean;
	min: number;
	max: number;
	value: number;
	onChange: (value: number) => void;
}

export const SliderWithInput = ({
	label,
	sublabel,
	required = false,
	min,
	max,
	value,
	onChange,
}: SliderWithInputProps) => {
	const handleBlur = () => {
		if (value < min) onChange(min);
		else if (value > max) onChange(max);
	};

	return (
		<Box sx={{ mb: 4 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box>
					<Typography variant='h3' className={styles.sliderTypography}>
						{label.toUpperCase()}
					</Typography>
					<Typography variant='body2' className={styles.sliderSublabel}>
						{sublabel}
					</Typography>
				</Box>
				{required && (
					<Box
						sx={{
							fontSize: '12px',
							background: '#f2f2f2',
							borderRadius: '12px',
							padding: '4px 10px',
							color: '#333',
						}}
					>
						Обовʼязково
					</Box>
				)}
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
				<TextField
					size='small'
					variant='outlined'
					placeholder={`${min} - ${max}`}
					onBlur={handleBlur}
					value={value ? value : null}
					onChange={(e) => onChange(+e.target.value)}
					className={styles.input}
					sx={{
						width: '100px',
						backgroundColor: '#f2f2f2',
						borderRadius: '8px',
						input: { fontSize: '14px', paddingX: '14px' },
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: 'transparent',
							},
							'&:hover fieldset': {
								borderColor: '#002D6E',
							},
							'&.Mui-focused fieldset': {
								borderColor: '#002D6E',
								borderWidth: '2px',
							},
						},
						'@media(min-width:1280px)': {
							width: '114px',
							mr: 2,
							input: { fontSize: '16px', paddingY: '16px', paddingX: '14px' },
						},
					}}
				/>

				<Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
					<Typography sx={{ mr: '0px', color: '#454545', fontWeight: 700 }}>
						{min}
					</Typography>
					<Slider
						value={value}
						min={min}
						max={max}
						onChange={(_, val) => onChange(val as number)}
						sx={{
							mx: 2,
							flexGrow: 1,
							color: '#454545',
							'& .MuiSlider-thumb': {
								width: 18,
								height: 18,
							},
							'& .MuiSlider-track': {
								height: '3px',
							},
							'@media (min-width: 1280px)': {
								'& .MuiSlider-thumb': {
									width: 24,
									height: 24,
								},
								'& .MuiSlider-track': {
									height: '8px',
								},

								'& .MuiSlider-rail': {
									height: '8px',
								},
							},
						}}
					/>
					<Typography sx={{ ml: '-5px', color: '#454545', fontWeight: 700 }}>
						{max}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
