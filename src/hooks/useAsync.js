import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  const handleError = (err) => {
    if (err.response) {
      setError(`Error ${err.response.status}: ${err.response.data.message || 'Failed to fetch data.'}`);
    } else if (err.request) {
      setError('No response from the server. Please try again later.');
    } else {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  useEffect(() => {
    execute();
  }, [execute, ...dependencies]);

  return { data, loading, error, execute };
};

export default useAsync;
