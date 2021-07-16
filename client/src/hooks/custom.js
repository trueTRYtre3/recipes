import { useState } from "react";

export const useField = type => {
    const [value, changeValue] = useState('')

    const onChange = event => {
        changeValue(event.target.value)
    }

    const reset = () => {
        changeState('')
    }

    return {
        reset,
        main: {
            type,
            onChange,
            value
        }
    }

}