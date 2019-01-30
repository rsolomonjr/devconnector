import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  autoComplete,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        autoComplete={autoComplete}
        className={
          error
            ? "form-control form-control-lg is-invalid"
            : "form-control form-control-lg"
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      {info && (
        <small className="form-text text-muted">
          <strong>{info}</strong>
        </small>
      )}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
