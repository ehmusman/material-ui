import React from 'react'
import { Button as MuiButton } from '@material-ui/core'

function Button({
    text,
    size,
    color,
    variant,
    onClick,
    ...other
}) {
    return (
        <MuiButton
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )
}

export default Button
