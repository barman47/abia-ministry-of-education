import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({
    id,
    name,
    title,
    placeholder,
    value,
    icon,
    info,
    onChange,
    errorMessage,
    label,
    maxLength,
    characters
}) => {
    return (
        <div className="input-field">
            {icon ? (<span className={`mdi ${icon} prefix`}></span>) : null}
            <textarea 
                className={classnames('materialize-textarea validate', {
                    'invalid': errorMessage
                })}
                id={id}
                name={name}
                title={title}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
            >
            </textarea>
            <label htmlFor={id}>{label}</label>
            {info ? (<span className="helper-text">{info}</span>) : null}
            {characters ? (<span className="helper-text">{characters}/250 characters.</span>) : null}
            {errorMessage ? (<span className="helper-text invalid-text">{errorMessage}</span>) : null}
        </div>
    );
};

TextArea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.number
};

export default TextArea;