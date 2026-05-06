import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce a value.
 *
 * @param {any} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @returns {any} - The debounced value.
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timer if the value changes or the component unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
