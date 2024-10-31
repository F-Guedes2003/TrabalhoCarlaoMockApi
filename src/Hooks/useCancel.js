import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cancel = () => {
    const navigate = useNavigate();
    
    function cancel() {
        navigate('/');
    }

    return { cancel };
}

export default Cancel;