import {useCallback, useState} from "react";

export const useHttp=()=> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            setLoading(true);
            let response;
            if (method === 'GET') {
                response = await fetch(url, {method, headers});
            } else if (method === 'POST') {
                response = await fetch(url, {method, headers, body: JSON.stringify(body)});
            }
            if (!response.ok) {

            }
            const data = await response.json();
            setLoading(false);
            return data;
        } catch (e) {
            setError(e.message)
            setLoading(false);
            throw e;
        }
    }, [])
    return {request, loading, error}
}