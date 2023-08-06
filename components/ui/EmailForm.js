import { useRef, useState } from "react";

export function EmailForm () {

  const [emailValid, setEmailValid] = useState(null);

  const emailRef = useRef();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleChangeEmail = () => {
    setEmailValid(emailRegex.test(emailRef.current.value.trim()));
  };

  return (
    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
      <label htmlFor="email" className="text-base font-semibold leading-none text-gray-800 dark:text-white">
        Adresse e-mail
      </label>
      <input 
        className={`text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 ${emailValid === false ? "border-red-500 border-2" : ""}`}
        tabIndex="0"
        arial-label="Entrez votre adresse e-mail" 
        type="email"
        name="email"
        placeholder="Entrez votre adresse e-mail"
        required
        autoComplete="name"
        ref={emailRef}
        onChange={handleChangeEmail}
      />
      {emailValid === false && (
        <p className="text-red-500 text-sm mt-2" role="alert" aria-live="assertive"
        >Veuillez entrer une adresse e-mail valide</p>
      )}
    </div>
  );
}

