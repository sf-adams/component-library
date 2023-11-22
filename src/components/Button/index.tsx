interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
