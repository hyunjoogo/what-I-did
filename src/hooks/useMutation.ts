import { useState } from 'react';

const useMutation = <T>(request: () => Promise<T>) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const mutate = async () => {
    setIsLoading(true);

    try {
      const result = await request();
      setResult(result);
      return result;
    } catch (reason) {
      if (!(reason instanceof Error)) throw reason;
      setError(reason);
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, result, isLoading, error };
};

export default useMutation;
