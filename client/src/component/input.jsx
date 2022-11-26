import React from "react";

const MyInput = ({
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
       
      />
      {touched && errors && (
        <div>
          <p>{errors}</p>
        </div>
      )}
    </>
  );
};

export default MyInput;
