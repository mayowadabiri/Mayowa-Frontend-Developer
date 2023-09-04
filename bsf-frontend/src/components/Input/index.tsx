export type InputElement = HTMLInputElement | HTMLTextAreaElement;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <label>
      <span className="text-grey-300 mb-2 block small">
        Search by reuse count
      </span>
      <input
        data-testid="input"
        // required={required}
        {...props}
        className="border border-grey-100 text-grey-400 rounded-lg flex items-center hover:bg-[#F0F4FF] py-4 md:pl-5 pl-4 bg-[transparent] text-base w-full focus-within:outline-none placeholder:text-grey-200 focus-within:border-accent-400 center"
      />
    </label>
  );
};

export default Input;
