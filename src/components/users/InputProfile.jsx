import React from "react";

const InputProfile = ({ type = "text", placeholder, value, onChange, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 border bg-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
};

export default InputProfile;
