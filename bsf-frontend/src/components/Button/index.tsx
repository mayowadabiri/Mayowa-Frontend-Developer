'use client';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => (
  <button
    className="text-accent-400 hover:text-accent-300 w-fit active:text-accent-500 py-3 px-4  text-center rounded-lg normal space-x-3 font-primary  transition duration-300 ease-out"
    {...props}
  >
    {children}
  </button>
);

export default Button;
