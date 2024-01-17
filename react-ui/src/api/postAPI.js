import React, { useState } from 'react';
import axios from 'axios';

function PostApiFunction() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handlePost = async () => {
        try {
            const response = await axios.post('http://localhost:8000/post-example', { key: 'value' });

            setResponseData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error has occurred in POST request:', error);

            setResponseData(null);
            setError(error);
        }
    };

    return (
        <div>
            <h3>POST Request</h3>
            <button onClick={handlePost}>Test POST Request</button>

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

export default PostApiFunction;
