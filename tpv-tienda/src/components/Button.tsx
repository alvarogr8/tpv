import './button.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}
export function Button({ children, ...buttonProps }: ButtonProps) {
  return <button {...buttonProps}>{children}</button>
}