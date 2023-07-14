import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetcher = async () => {
      try {
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

  return {
    isLoading,
    data,
    error,
  };
}

export default useFetch;
