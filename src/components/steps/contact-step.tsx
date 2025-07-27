import { TextField, Typography, Box } from '@mui/material';
import { useStepForm } from '../../context/use-step-form';
import styles from './step.module.scss';

export default function ContactsStep() {
	const { formData, updateNested } = useStepForm();

	const handlePhoneChange = (value: string) => {
		const cleaned = value.replace(/[^\d]/g, '');
		const final = '+380' + cleaned.slice(3);
		updateNested('contacts', {
			...formData.contacts,
			phone: final,
		});
	};

	const handleChange = (
		field: keyof typeof formData.contacts,
		value: string
	) => {
		updateNested('contacts', {
			...formData.contacts,
			[field]: value,
		});
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
			<Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
					<Typography fontWeight={700} fontSize='18px' color='#002D6E'>
						Особисті дані
					</Typography>
					<Typography className={styles.require}>Обовʼязково</Typography>
				</Box>
				<TextField
					fullWidth
					variant='outlined'
					placeholder='Ім’я'
					value={formData.contacts.name}
					onChange={(e) => handleChange('name', e.target.value)}
					className={styles.input}
					sx={{
						mb: 2,
						backgroundColor: '#f2f2f2',
						borderRadius: '8px',
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
					}}
				/>
				<TextField
					fullWidth
					variant='outlined'
					placeholder='Email'
					value={formData.contacts.email}
					onChange={(e) => handleChange('email', e.target.value)}
					className={styles.input}
					sx={{
						mb: 2,
						backgroundColor: '#f2f2f2',
						borderRadius: '8px',
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
					}}
				/>
				<TextField
					fullWidth
					variant='outlined'
					placeholder='+380XXXXXXXXX'
					value={formData.contacts.phone}
					onChange={(e) => handlePhoneChange(e.target.value)}
					sx={{
						mb: 2,
						backgroundColor: '#f2f2f2',
						borderRadius: '8px',
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
					}}
					InputProps={{
						startAdornment: (
							<Box
								component='span'
								sx={{ mr: 1, display: 'flex', alignItems: 'center' }}
							>
								🇺🇦
							</Box>
						),
					}}
				/>
			</Box>
			<Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
					<Typography fontWeight={700} fontSize='18px' color='#002D6E'>
						Ваші коментарі
					</Typography>
					<Typography className={styles.require}>Обовʼязково</Typography>
				</Box>
				<TextField
					fullWidth
					multiline
					minRows={4}
					placeholder='Що б ви ще хотіли додати?'
					value={formData.contacts.comment}
					onChange={(e) => handleChange('comment', e.target.value)}
					sx={{
						backgroundColor: '#f2f2f2',
						borderRadius: '8px',
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
					}}
				/>
			</Box>
		</Box>
	);
}
