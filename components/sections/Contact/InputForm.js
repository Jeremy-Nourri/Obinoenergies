import { useRef, useState } from 'react';

export default function Input({ type, name, label, pattern, errorMessage }) {

  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  const handleOnBlur = () => {
    const inputValue = inputRef.current.value;
    const isValidInput = new RegExp(pattern).test(inputValue);
    setIsValid(isValidInput);
  };

  return (
    <div className="flex flex-col md:w-[46%]">
      <label htmlFor={name} className="text-base md:text-lg font-semibold leading-none">
        {label}
      </label>
      <input 
        className={`text-base md:text-lg leading-none text-gray-900 p-3 mt-4 border rounded  focus:border-orange ${!isValid && 'border-red-500'}`}
        arial-label={`Entrez votre ${label}`} 
        type={type}
        name={name}
        id={name}
        placeholder={`Entrez votre ${label}`}
        required
        autoComplete="on"
        pattern={pattern}
        onBlur={handleOnBlur}
        ref={inputRef}

      />
      <p className="h-5 mt-2 text-red-500 text-xs leading-none text-center">{!isValid && errorMessage}</p>
    </div>
  );
}
