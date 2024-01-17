import React, { useState } from 'react';
import axios from 'axios';

function GetApiFunction() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleGet = async () => {
        try {
            const response = await axios.get('http://localhost:8000/get-example');
            setResponseData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error has occurred in GET request:', error);
            setResponseData(null);
            setError(error);
        }
    };

    return (
        <div>
            <h3>Get Request</h3>
            <button onClick={handleGet}>Test GET Request</button>

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

export default GetApiFunction;
