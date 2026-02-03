import React from 'react';

const inputBaseStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #DEE2E6',
    fontSize: '15px',
    color: '#343A40',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
};

const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#343A40',
    marginBottom: '6px',
};

const errorStyle = {
    fontSize: '13px',
    color: '#DC3545',
    marginTop: '4px',
};

const Input = ({ label, type = 'text', name, value, onChange, placeholder, error, required = false, options, ...props }) => {
    const [focused, setFocused] = React.useState(false);

    const inputStyle = {
        ...inputBaseStyle,
        borderColor: error ? '#DC3545' : focused ? '#5CB1D8' : '#DEE2E6',
        boxShadow: focused && !error ? '0 0 0 3px rgba(92, 177, 216, 0.2)' : 'none',
    };

    // If options are passed, render a select dropdown instead
    if (options) {
        return (
            <div style={{ marginBottom: '16px' }}>
                {label && (
                    <label style={labelStyle}>
                        {label} {required && <span style={{ color: '#DC3545' }}>*</span>}
                    </label>
                )}
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={inputStyle}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                >
                    <option value="">{placeholder || 'Select an option'}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p style={errorStyle}>{error}</p>}
            </div>
        );
    }

    // For textarea
    if (type === 'textarea') {
        return (
            <div style={{ marginBottom: '16px' }}>
                {label && (
                    <label style={labelStyle}>
                        {label} {required && <span style={{ color: '#DC3545' }}>*</span>}
                    </label>
                )}
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                />
                {error && <p style={errorStyle}>{error}</p>}
            </div>
        );
    }

    // Default: regular input
    return (
        <div style={{ marginBottom: '16px' }}>
            {label && (
                <label style={labelStyle}>
                    {label} {required && <span style={{ color: '#DC3545' }}>*</span>}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={inputStyle}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />
            {error && <p style={errorStyle}>{error}</p>}
        </div>
    );
};

export default Input;