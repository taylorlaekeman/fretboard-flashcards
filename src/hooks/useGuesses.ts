import { useState } from 'react';
import { ResultStatus } from '../types/resultStatus';

export function useGuesses<T>(): {
  guess: (guessedValue: T) => void;
  guesses: Guess<T>[];
  start: (answer: T) => void;
} {
  const [answer, setAnswer] = useState<T | undefined>();
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [guesses, setGuesses] = useState<Guess<T>[]>([]);

  return {
    guess: (guessedValue: T) => {
      const status =
        guessedValue === answer ? ResultStatus.Correct : ResultStatus.Incorrect;
      const newGuess = {
        guess: guessedValue,
        status,
        time: Date.now() - startTime,
      };
      setGuesses([...guesses, newGuess]);
    },
    guesses,
    start: (answer: T) => {
      setAnswer(answer);
      setStartTime(Date.now);
    },
  };
}

export interface Guess<T> {
  guess: T;
  status: ResultStatus;
  time: number;
}
