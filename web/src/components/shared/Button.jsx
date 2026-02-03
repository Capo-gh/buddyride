import React from 'react';

const buttonStyles = {
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '15px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
        width: '100%',
        maxWidth: '320px',
    },
    primary: {
        backgroundColor: '#5CB1D8',
        color: '#FFFFFF',
    },
    secondary: {
        backgroundColor: '#9DB637',
        color: '#FFFFFF',
    },
    outline: {
        backgroundColor: 'transparent',
        color: '#5CB1D8',
        border: '2px solid #5CB1D8',
    },
    ghost: {
        backgroundColor: 'transparent',
        color: '#343A40',
        padding: '8px 12px',
    },
};

const Button = ({ variant = 'primary', children, onClick, fullWidth = false, disabled = false, ...props }) => {
    const style = {
        ...buttonStyles.base,
        ...buttonStyles[variant],
        maxWidth: fullWidth ? 'none' : buttonStyles.base.maxWidth,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
    };

    return (
        <button style={style} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default Button;