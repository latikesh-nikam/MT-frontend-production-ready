import { useEffect } from 'react';
import { useState } from 'react';
import { IErrorBoundaryProps } from './ErrorBoundary.types';

const ErrorBoundary = ({ children }: IErrorBoundaryProps) => {
  const [componentToRender, updateComponentToRender] = useState(<></>);
  useEffect(() => {
    try {
      console.log('in try');
      updateComponentToRender(children as JSX.Element);
    } catch (error) {
      console.log('in catch');
      updateComponentToRender(<>Some Error Occurred</>);
    }
  }, [children]);

  return componentToRender;
};
export default ErrorBoundary;
