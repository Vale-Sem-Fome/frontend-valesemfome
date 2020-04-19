import React from 'react'
import MaskedInput from "react-input-mask";
import Input from './../Input'

export default function InputMask({ type, name, id, placeholder, value, mask, inputRef, onChange }) {
    return (
        <MaskedInput
            maskChar=""
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            mask={mask}
            onChange={onChange}>
            {(props) => {
                const { type, name, id, placeholder, value, mask, ...inputProps } = props;
                return (
                    <Input
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                        value={value}
                        ref={inputRef}
                        {...inputProps} />
                );
            }}
        </MaskedInput>
    )
}
