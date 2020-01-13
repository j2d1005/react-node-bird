import { useState, useCallback } from "react";

// useInput hooks
export const useInput = (initValue = null) => {
    const [value, setValue] = useState(initValue);
    const handler = useCallback( (e) => {
        setValue(e.target.value);
    },[]);
    return [value, handler];
};

