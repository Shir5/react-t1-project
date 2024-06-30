export const getRolesRequestHandler = async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const url = `http://localhost:3000/proxy/api/get-roles?${queryString}`;

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
