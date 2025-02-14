

const Input = ({ titulo, required, type, errorText, placeholder }) => {

  const isRequired = required ? true : false;

  return (
    <>
      <label for="validationCustom01" class="form-label">{titulo}</label>
      <input
        type={type}
        class="form-control"
        id="validationCustom01"
        placeholder={placeholder}
        required={isRequired}
      />
      <div class="invalid-feedback">
        {errorText}
      </div>
    </>
  )
}

export default Input