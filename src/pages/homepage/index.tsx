import { Container } from '../../components/layouts/container';
import style from './homepage.module.scss';
import WindowImg from '../../assets/window.png';
import StepWrapper from '../../components/steps/step-wrapper.tsx';
import { useStepForm } from '../../context/use-step-form.tsx';

export default function Home() {
	const { selectedPhoto } = useStepForm();
	return (
		<Container>
			<div className={style.content}>
				<img
					className={style.windowImage}
					src={selectedPhoto ? selectedPhoto : WindowImg}
					alt=''
				/>
				<StepWrapper />
			</div>
		</Container>
	);
}
