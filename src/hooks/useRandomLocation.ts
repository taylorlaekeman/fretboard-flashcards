import { useState } from 'react';

import Location from '@/types/location';
import String from '@/types/string';

function useRandomLocation(): Result {
  const [fret, setFret] = useState<number>(getRandomNumber(13));
  const [string, setString] = useState<String>(getRandomString());

  return {
    fret,
    refresh: () => {
      setFret(getRandomNumber(13));
      setString(getRandomString());
    },
    string,
  };
}

interface Result extends Location {
  refresh: () => void;
}

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomString(): String {
  const index = getRandomNumber(6);
  return Object.values(String)[index];
}

export default useRandomLocation;
