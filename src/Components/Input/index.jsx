import React from "react";
import { IconContainer, InputContainer, InputText } from './styles'

const Input = ({leftIcon, name, control, ...rest}) => {
    return (
        <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
            <InputText {...rest}></InputText>
        </InputContainer>
    )
}

export { Input };