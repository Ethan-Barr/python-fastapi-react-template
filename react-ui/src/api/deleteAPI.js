import React, { useState } from 'react';
import axios from 'axios';

function DeleteApiFunction() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        try {
            const response = await axios.delete('http://localhost:8000/delete-example');

            setResponseData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error has occurred in DELETE request:', error);

            setResponseData(null);
            setError(error);
        }
    };

    return (
        <div>
            <h3>DELETE Request</h3>
            <button onClick={handleDelete}>Test DELETE Request</button>

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

export default DeleteApiFunction;
