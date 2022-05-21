import React, { useState } from 'react'

export const Text = (props) => {
    const [value, setValue] = useState(props.value);
    const onChange = (e) => {
        setValue(e.target.value);
        props.onChange(e.target.value)
    }
    return (
        <div>
            <input className="form-control" type="number" value={value} onChange={onChange} />
        </div>
    )
}
