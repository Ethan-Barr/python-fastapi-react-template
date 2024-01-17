import React, { useState } from 'react';
import axios from 'axios';

function PutApiFunction() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handlePut = async () => {
        try {
            const response = await axios.put('http://localhost:8000/put-example', { key: 'value' });

            setResponseData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error has occurred in PUT request:', error);

            setResponseData(null);
            setError(error);
        }
    };

    return (
        <div>
            <h3>PUT Request</h3>
            <button onClick={handlePut}>Test PUT Request</button>

            <div className='response'>
                {responseData && (
                    <>
                        <h4>Response Data:</h4>
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </>
                )}
                {error && (
                    <>
                        <h4>Error:</h4>
                        <p>{error.message}</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default PutApiFunction;
