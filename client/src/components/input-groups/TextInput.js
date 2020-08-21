import React  from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextInput = ({
    id,
    name,
    type,
    title,
    placeholder,
    value,
    icon,
    info,
    maxLength,
    onChange,
    errorMessage,
    label,
    disabled,
    autoFocus
}) => {
    return (
        <div className="input-field">
            {icon ? (<span className={`mdi ${icon} prefix`}></span>) : null}
            <input 
                className={classnames('form-input validate', {
                    'invalid': errorMessage
                })}
                type={type}
                id={id}
                name={name}
                title={title}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
                disabled={disabled}
                autoFocus={autoFocus}
            />
            <label htmlFor={id}>{label}</label>
            {errorMessage ? (<span className="helper-text invalid-text">{errorMessage}</span>) : null}
            {info ? (<span className="helper-text">{info}</span>) : null}
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    autoFocus: PropTypes.bool
};

TextInput.defaultProps = {
    type: 'text'
};

export default TextInput;