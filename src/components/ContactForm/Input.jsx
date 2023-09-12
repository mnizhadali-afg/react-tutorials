const Input = ({ type, className, name, placeholder, required, onChange }) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  )
}

export default Input
