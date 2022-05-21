import React, { useState } from 'react'

export const Select = (props) => {
    const [value, setValue] = useState(props.value);
    const onChange = (e) => {
        setValue(e.target.value);
        props.onChange(e.target.value)
    }
    return (
        <div>
            <select className='form-control' onChange={onChange} >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>
    )
}
