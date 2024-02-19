/* eslint-disable react/prop-types */
const InputField = ({ label, type, name, id, ...props }) => {
  return (
    <div className="form-group mt-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        className="form-control"
        required
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default InputField;
