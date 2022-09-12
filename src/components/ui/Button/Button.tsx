import './Button.scss';

interface ButtonProps {
  children: React.ReactNode,
  classList?: string,
  onClick?: () => void,
}

function Button({ children, classList, onClick }: ButtonProps) {

  const createClass = (): string => {
    return `button ${classList}`;
  };

  return (
    <button onClick={onClick} className={createClass()}>{children}</button>
  );
}

export default Button;