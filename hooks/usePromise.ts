import { useEffect, useState } from "react";

export default function usePromise(
  promiseCreator: () => void,
  deps: [string, number],
) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await promiseCreator();
        setResolved(response);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
