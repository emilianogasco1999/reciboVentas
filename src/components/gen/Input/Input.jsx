const Input = ({ titulo, required, type, errorText, placeholder, register, name }) => {
  const isRequired = required ? true : false;

  return (
    <>
      <label className="form-label">{titulo}</label>
      <input
        {...register(`${name}`)}
        type={type}
        className="form-control"
        placeholder={placeholder}
        required={isRequired}
      />
      <div className="invalid-feedback">
        {errorText}
      </div>
    </>
  )
}

export default Input