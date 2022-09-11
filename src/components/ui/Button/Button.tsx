import './Button.scss';

interface ButtonProps {
  children: React.ReactNode,
  classList?: string,
  onBtnClick?: () => void,
}

function Button({ children, classList }: ButtonProps) {

  const createClass = (): string => {
    return `button ${classList}`;
  };

  return (
    <button className={createClass()}>{children}</button>
  );
}

export default Button;