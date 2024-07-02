export const getRolesRequestHandler = async () => {
    const url = `http://193.19.100.32:7000/api/get-roles`;

    try {
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
        return JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Fetch error:', error);
        throw new Error('Fetch failed: ' + error.message);
    }
};
