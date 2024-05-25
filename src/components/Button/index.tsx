import type {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
  
const Button = (props: ButtonProps) => {
  return <button {...props}>Button</button>;
}

export default Button
