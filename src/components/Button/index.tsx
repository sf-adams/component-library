import { button } from "./button.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button className={button} onClick={onClick}>{children}</button>;
};
