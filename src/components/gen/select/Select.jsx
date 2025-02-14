

const Select = ({ titulo, required, errorText, options, register, name }) => {
  const isRequired = required ? true : false;
  return (
    <>
      <label className="form-label">{titulo}</label>
      <select
        {...register(`${name}`)}
        className="form-select"
        required={isRequired}
      >
        {options && options.length > 0 ? (
          options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.titulo}
            </option>
          ))
        ) : (
          <option selected disabled>Sin opciones disponibles</option>
        )}
      </select>
      <div className="invalid-feedback">
        {errorText}
      </div>
    </>
  )
}

export default Select