import React from "react";
import './button.scss';

type Props = {
    type: 'button' | 'submit' | 'reset' | undefined,
    children: React.ReactNode,
    variant: 'filled' | 'outlined' | undefined
}

export const Button: React.FC<Props> = ({ type, children, variant }) => {
    return (

        <button className={variant ? `btn__${variant}` : `btn__filled`} type={type}>{children}</button>
    )
}
