import React from 'react';

export const useHttp = ({ url, method, options = {} }) => {
  const [dataSource, setDataSource] = React.useState(null)
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if(!url) return;
    setLoading(true)
    fetch(url, {
      method,
      ...options
    })
      .then(response => response.json())
      .then(data => setDataSource(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [url]);

  return {
    dataSource,
    loading,
    error 
  }
}