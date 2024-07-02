export const signUpRequestHandler = async (parameters) => {
    try {
        
        console.log('Signup request parameters:', parameters);
        const response = await fetch('http://193.19.100.32:7000/api/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parameters),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Signup request successful:', data);
        return data;
    } catch (error) {
        console.error('Error during signup request:', error);
        throw new Error('Signup request failed: ' + error.message);
    }
};
