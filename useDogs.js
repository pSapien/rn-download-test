import { useEffect, useState } from 'react';

export function useDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await fetch('https://dog.ceo/api/breed/husky/images');
        const jsoned = await response.json();
        setDogs(jsoned.message.slice(0, 10));
      } catch (err) {
        console.log('while fetching dogs');
      }
    }

    fetchDogs();
  }, []);

  return dogs;
}
