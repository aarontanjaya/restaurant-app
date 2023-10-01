import { useEffect, useState } from 'react';

export interface FetchReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: boolean;
  errorMessage: string | null;
}

const useFetch = <T>(url: string): FetchReturn<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data as T);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error, errorMessage };
};

export default useFetch;
