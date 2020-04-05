import React from 'react';

const Input = React.forwardRef(({ type, name, id, placeholder, value, onChange, ...inputProps }, ref) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            ref={ref}
            onChange={onChange}
            {...inputProps} />
    );
});

export default Input;