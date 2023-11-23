import { buttonStyle } from "./button.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  background: "primary" | "secondary";
}

export const Button = ({ children, onClick, background }: ButtonProps) => {
  return (
    <button className={buttonStyle({color: background})} onClick={onClick}>
      {children}
    </button>
  );
};
