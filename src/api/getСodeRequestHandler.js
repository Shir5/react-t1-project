export const getCodeRequestHandler = async (parameters) => {
    const queryString = new URLSearchParams(parameters).toString();
    const url = `http://193.19.100.32:7000/api/get-code?${queryString}`;

    try {
        console.log('Get Code request parameters:', parameters);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        console.log('Get Code request successful:', data);

        const { email } = parameters;
        const encodedToken = btoa(email + ":" + data);
        
        return encodedToken;
    } catch (error) {
        console.error('Error during Get Code request:', error);
        throw new Error('Get Code request failed: ' + error.message);
    }
};
