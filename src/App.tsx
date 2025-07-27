import './App.css';
import Home from './pages/homepage';
import {StepFormProvider} from "./context/step-form-provider.tsx";


function App() {
	return (
		<StepFormProvider >
			<Home />
		</StepFormProvider>
	);
}

export default App;
