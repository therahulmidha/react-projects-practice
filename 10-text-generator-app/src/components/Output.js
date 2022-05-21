import React, { useState } from 'react'

export const Output = (props) => {
    const [value, setValue] = useState(props.value);

    return (
        <div className='output'>{props.value}</div>
    )
}
