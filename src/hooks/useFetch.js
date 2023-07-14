import { useState, useEffect } from 'react';

function useFetch({ url, options = {} }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const fetcher = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
  }, [url, options]);

  return { isLoading, data, error };
}

export default useFetch;
