import {useContext} from "react";
import {StepFormContext} from "./step-form-context.tsx";

export const useStepForm = () => {
  const context = useContext(StepFormContext);
  if (!context) {
    throw new Error('useStepForm must be used within a StepFormProvider');
  }
  return context;
};
