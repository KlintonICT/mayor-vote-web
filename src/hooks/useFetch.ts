import { useEffect, useState } from 'react';
import { isEmpty } from 'ramda';

const useFetch = (API: any, params: any, deps: any[]) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const res = isEmpty(params) ? await API() : await API(params);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { isLoading, data, error };
};

export default useFetch;
