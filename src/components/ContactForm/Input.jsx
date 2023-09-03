const Input = ({ type, className, name, placeholder, required }) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  )
}

export default Input
