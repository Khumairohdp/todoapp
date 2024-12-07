import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
    </div>
  );
};

export default Input;
