import { useState, useCallback } from 'react';

export const useQuantity = (initialQuantity = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  }, []);

  const reset = useCallback(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  return { quantity, increment, decrement, reset };
};