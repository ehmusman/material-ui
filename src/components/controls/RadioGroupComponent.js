import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'

function RadioGroupComponent({
    title,
    name,
    value,
    onChange,
    items
}) {
    return (
        <FormControl>
            <FormLabel>{title}</FormLabel>
            <RadioGroup row
                name={name}
                value={value}
                onChange={onChange}
            >
                {items.map(item => (
                    <FormControlLabel
                        key={item.id} value={item.id} control={<Radio />} label={item.title} />
                ))}

            </RadioGroup>
        </FormControl>
    )
}

export default RadioGroupComponent;
