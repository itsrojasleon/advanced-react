// The functionality of this Hook is fetch any resource inside the API
// The API has many endpoints, we can use them for get any data

import { useState, useEffect } from 'react';

export default function useFetchResource(resource) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let BASE_URL = 'https://petgram-app-server-ln46kf2xq.now.sh';
    let ignore = false;
    setLoading(true);

    async function fetchData() {
      try {
        const request = await fetch(`${BASE_URL}/${resource}`);
        const response = await request.json();
        if (!ignore) {
          setResources(response);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [resource]);

  return [resources, loading, error];
}
