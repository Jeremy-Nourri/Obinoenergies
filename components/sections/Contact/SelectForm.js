
export default function Select({ name, label, options }) {
  return (
    <div className="flex flex-col mt-4 md:w-[46%]">
      <label htmlFor={name} className="text-base md:text-lg font-semibold leading-none" >
        {label}
      </label>
      <select
        className="text-base md:text-lg leading-none text-gray-900 p-3 bg-slate-50 focus:border-orange mt-4 border rounded"
        name={name}
        id={name}
        aria-label="Choisissez une option"
        defaultValue="non renseigné"
      >
        <option value="non renseigné" disabled>
          Choisissez une option
        </option>
        {options.map((itemOption, index) => (
          <option key={index} value={itemOption}>
            {itemOption}
          </option>
        ))}
      </select>
    </div>
  )
}