import React, { createContext, FC, useContext } from 'react';

import styles from './Fretboard.module.css';
import StringType from '../types/string';

const Fretboard: FC<{
  fret?: number;
  length?: Length;
  string?: StringType;
}> = ({ fret, length = Length.Twelve, string }) => {
  const gapAroundStrings = 10;
  const neckLength = FRET_POSITIONS[length - 1] + 12;
  const neckWidth = 170;
  makeList(6);
  return (
    <svg
      className={styles.fretboard}
      viewBox={`0 0 ${neckLength} ${neckWidth}`}
    >
      <Nut />
      {makeList(6).map((number) => (
        <String
          gapAround={gapAroundStrings}
          key={number}
          neckWidth={neckWidth}
          number={number + 1}
        />
      ))}
      {makeList(length).map((number) => (
        <Fret key={number} number={number + 1} />
      ))}
      <FretMarker fret={3} />
      <FretMarker fret={5} />
      <FretMarker fret={7} />
      <FretMarker fret={9} />
      <FretMarker fret={12} isDouble />
      {length >= 15 && <FretMarker fret={15} />}
      {length >= 17 && <FretMarker fret={17} />}
      {length >= 19 && <FretMarker fret={19} />}
      {length >= 21 && <FretMarker fret={21} />}
      <Note fret={fret} string={string} />
    </svg>
  );
};

const FRET_POSITIONS = [
  175, 302, 422, 535, 642, 743, 838, 928, 1013, 1093, 1169, 1240, 1307, 1371,
  1430, 1488, 1541, 1592, 1639, 1684, 1726, 1766, 1804, 1838,
];

export enum Length {
  Twelve = 12,
  TwentyFour = 24,
}

const FretboardContext = createContext<{
  fretPositions: number[];
  stringPositions: number[];
  stringWidths: number[];
}>({
  fretPositions: FRET_POSITIONS,
  stringPositions: getStringPositions(),
  stringWidths: [1, 1, 2, 3, 3, 4],
});

function getStringPositions(): number[] {
  const neckWidth = 170;
  const gapAroundStrings = 10;
  const availableWidth = neckWidth - gapAroundStrings * 2;
  const gapBetweenStrings = availableWidth / 5; // 5 gaps between 6 strings
  let result = [];
  for (let i = 0; i < 6; i += 1) {
    result.push(gapAroundStrings + i * gapBetweenStrings);
  }
  return result;
}

const Nut: FC = () => (
  <line x1="45" y1="0" x2="45" y2="100%" stroke="black" stroke-width="10" />
);

const String: FC<{
  gapAround?: number;
  neckWidth?: number;
  number?: number;
}> = ({ gapAround = 10, neckWidth = 170, number = 1 }) => {
  const { stringPositions, stringWidths } = useContext(FretboardContext);
  const verticalPosition = stringPositions[number - 1];
  return (
    <line
      x1="0"
      y1={verticalPosition}
      x2="100%"
      y2={verticalPosition}
      stroke="black"
      stroke-width={stringWidths[number - 1]}
    />
  );
};

const Fret: FC<{ number?: number }> = ({ number = 1 }) => {
  const { fretPositions } = useContext(FretboardContext);
  const horizontalPosition = fretPositions[number - 1];
  return (
    <line
      x1={horizontalPosition}
      y1="0"
      x2={horizontalPosition}
      y2="100%"
      stroke="black"
      stroke-width="4px"
    />
  );
};

const FretMarker: FC<{ fret?: number; isDouble?: boolean }> = ({
  fret = 3,
  isDouble = false,
}) => {
  const { fretPositions } = useContext(FretboardContext);
  const fretBelowPosition = fretPositions[fret - 1];
  const fretAbovePosition = fretPositions[fret];
  const fretWidth = fretBelowPosition - fretAbovePosition;
  const fretHorizontalCenter = fretBelowPosition + fretWidth / 2;
  const verticalCenter = 85;
  const doubleOffset = 30;
  const verticalPosition = isDouble
    ? verticalCenter + doubleOffset - 10
    : verticalCenter - 10;
  return (
    <>
      <rect
        x={fretHorizontalCenter - 10}
        y={verticalPosition}
        width="20"
        height="20"
        fill="black"
        transform="rotate(45)"
        transform-origin={`${fretHorizontalCenter} ${verticalPosition + 10}`}
      />
      {isDouble && (
        <rect
          x={fretHorizontalCenter - 10}
          y={verticalCenter - doubleOffset - 10}
          width="20"
          height="20"
          fill="black"
          transform="rotate(45)"
          transform-origin={`${fretHorizontalCenter} ${
            verticalCenter - doubleOffset
          }`}
        />
      )}
    </>
  );
};

const Note: FC<{ fret?: number; string?: StringType }> = ({ fret, string }) => {
  const { fretPositions, stringPositions } = useContext(FretboardContext);
  if (fret === undefined || !string) return;
  const fretPosition = fret === 0 ? 40 : fretPositions[fret - 1];
  const stringNumber = parseInt(string, 10);
  const stringPosition = stringPositions[stringNumber - 1];
  return (
    <circle cx={fretPosition - 20} cy={stringPosition} r="10" fill="orange" />
  );
};

function makeList(upTo: number = 0): number[] {
  const result = [];
  for (let i = 0; i < upTo; i += 1) {
    result.push(i);
  }
  return result;
}

export default Fretboard;
