import clsx from 'clsx';
import React, { createContext, FC, useContext } from 'react';

import styles from './Fretboard.module.css';
import StringType from '../types/string';

export function Fretboard({
  fret,
  length = Length.Twelve,
  orientation = Orientation.Horizontal,
  string,
}: {
  fret?: number;
  length?: Length;
  orientation?: Orientation;
  string?: StringType;
}): React.ReactElement {
  const gapAroundStrings = 10;
  const neckLength = FRET_POSITIONS[length - 1] + 12;
  const neckWidth = 170;
  const viewBox =
    orientation === Orientation.Horizontal
      ? { x: neckLength, y: neckWidth }
      : {
          x: neckWidth,
          y: neckLength,
        };
  return (
    <svg
      className={clsx(styles.fretboard, styles[orientation])}
      height="100%"
      viewBox={`0 0 ${viewBox.x} ${viewBox.y}`}
      width="100%"
    >
      <Nut orientation={orientation} />
      {makeList(6).map((number) => (
        <String
          gapAround={gapAroundStrings}
          key={number}
          neckWidth={neckWidth}
          number={number + 1}
          orientation={orientation}
          viewBox={viewBox}
        />
      ))}
      {makeList(length).map((number) => (
        <Fret key={number} number={number + 1} orientation={orientation} />
      ))}
      <FretMarker fret={3} orientation={orientation} viewBox={viewBox} />
      <FretMarker fret={5} orientation={orientation} viewBox={viewBox} />
      <FretMarker fret={7} orientation={orientation} viewBox={viewBox} />
      <FretMarker fret={9} orientation={orientation} viewBox={viewBox} />
      <FretMarker
        fret={12}
        isDouble
        orientation={orientation}
        viewBox={viewBox}
      />
      {length >= 15 && (
        <FretMarker fret={15} orientation={orientation} viewBox={viewBox} />
      )}
      {length >= 17 && (
        <FretMarker fret={17} orientation={orientation} viewBox={viewBox} />
      )}
      {length >= 19 && (
        <FretMarker fret={19} orientation={orientation} viewBox={viewBox} />
      )}
      {length >= 21 && (
        <FretMarker fret={21} orientation={orientation} viewBox={viewBox} />
      )}
      <Note
        fret={fret}
        orientation={orientation}
        string={string}
        viewBox={viewBox}
      />
    </svg>
  );
}

export enum Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

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

function Nut({
  orientation,
}: {
  orientation: Orientation;
}): React.ReactElement {
  return (
    <RadialLine
      offset={45}
      orientation={orientation}
      stroke="bisque"
      width={10}
    />
  );
}

interface Positions {
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

interface ViewBox {
  x: number;
  y: number;
}

function String({
  gapAround = 10,
  neckWidth = 170,
  number = 1,
  orientation,
  viewBox,
}: {
  gapAround?: number;
  neckWidth?: number;
  number?: number;
  orientation: Orientation;
  viewBox: ViewBox;
}): React.ReactElement {
  const { stringPositions, stringWidths } = useContext(FretboardContext);
  return (
    <AxialLine
      offset={stringPositions[number - 1]}
      orientation={orientation}
      stroke="grey"
      viewBox={viewBox}
      width={stringWidths[number - 1]}
    />
  );
}

function Fret({
  number = 1,
  orientation,
}: {
  number?: number;
  orientation: Orientation;
}): React.ReactElement {
  const { fretPositions } = useContext(FretboardContext);
  return (
    <RadialLine
      offset={fretPositions[number - 1]}
      orientation={orientation}
      stroke="slategrey"
      width={4}
    />
  );
}

function FretMarker({
  fret = 3,
  isDouble = false,
  orientation,
  viewBox,
}: {
  fret?: number;
  isDouble?: boolean;
  orientation: Orientation;
  viewBox: ViewBox;
}): React.ReactElement {
  const { fretPositions } = useContext(FretboardContext);
  const fretBelowPosition = fretPositions[fret - 1];
  const fretAbovePosition = fretPositions[fret];
  const fretWidth = fretBelowPosition - fretAbovePosition;
  const axialCenter = fretBelowPosition + fretWidth / 2;
  const radialCenter = 85;
  const doublePosition = 30;
  return (
    <>
      <Circle
        axialPosition={axialCenter}
        fill="silver"
        orientation={orientation}
        radialPosition={isDouble ? radialCenter + doublePosition : radialCenter}
        radius={10}
        viewBox={viewBox}
      />
      {isDouble && (
        <Circle
          axialPosition={axialCenter}
          fill="silver"
          orientation={orientation}
          radialPosition={radialCenter - doublePosition}
          radius={10}
          viewBox={viewBox}
        />
      )}
    </>
  );
}

function Note({
  fret,
  orientation,
  string,
  viewBox,
}: {
  fret?: number;
  orientation: Orientation;
  string?: StringType;
  viewBox: ViewBox;
}): React.ReactNode {
  const { fretPositions, stringPositions } = useContext(FretboardContext);
  if (fret === undefined || !string) return;
  const stringNumber = parseInt(string, 10);
  const stringPosition = stringPositions[stringNumber - 1];
  if (fret === 0)
    return (
      <Circle
        axialPosition={20}
        orientation={orientation}
        radialPosition={stringPosition}
        radius={10}
        fill="orange"
        viewBox={viewBox}
      />
    );
  const fretStart = fret > 1 ? fretPositions[fret - 2] : 45;
  const fretEnd = fretPositions[fret - 1];
  return (
    <Pill
      axialPosition={fretStart + 10}
      orientation={orientation}
      radialPosition={stringPosition}
      length={fretEnd - fretStart - 20}
      viewBox={viewBox}
    />
  );
}

function makeList(upTo: number = 0): number[] {
  const result = [];
  for (let i = 0; i < upTo; i += 1) {
    result.push(i);
  }
  return result;
}

function RadialLine({
  offset,
  orientation,
  stroke = 'black',
  width,
}: {
  offset: number;
  orientation: Orientation;
  stroke?: string;
  width: number;
}): React.ReactElement {
  const positions: Positions =
    orientation === Orientation.Horizontal
      ? {
          x1: offset,
          x2: offset,
          y1: 0,
          y2: '100%',
        }
      : {
          x1: 0,
          x2: '100%',
          y1: offset,
          y2: offset,
        };
  return (
    <line
      x1={positions.x1}
      x2={positions.x2}
      y1={positions.y1}
      y2={positions.y2}
      stroke={stroke}
      strokeWidth={width}
    />
  );
}

function AxialLine({
  offset,
  orientation,
  stroke = 'black',
  viewBox,
  width,
}: {
  offset: number;
  orientation: Orientation;
  stroke?: string;
  viewBox: ViewBox;
  width: number;
}): React.ReactElement {
  const positions: Positions =
    orientation === Orientation.Horizontal
      ? {
          x1: 0,
          x2: '100%',
          y1: offset,
          y2: offset,
        }
      : {
          x1: viewBox.x - offset,
          x2: viewBox.x - offset,
          y1: 0,
          y2: '100%',
        };
  return (
    <line
      x1={positions.x1}
      x2={positions.x2}
      y1={positions.y1}
      y2={positions.y2}
      stroke={stroke}
      strokeWidth={width}
    />
  );
}

function Circle({
  axialPosition,
  fill = 'black',
  orientation,
  radialPosition,
  radius,
  viewBox,
}: {
  axialPosition: number;
  fill?: string;
  orientation: Orientation;
  radialPosition: number;
  radius: number;
  viewBox: ViewBox;
}): React.ReactElement {
  const positions =
    orientation === Orientation.Horizontal
      ? {
          x: axialPosition,
          y: radialPosition,
        }
      : {
          x: viewBox.x - radialPosition,
          y: axialPosition,
        };
  return <circle cx={positions.x} cy={positions.y} r={radius} fill={fill} />;
}

function Pill({
  axialPosition,
  length = 20,
  orientation,
  radialPosition,
  viewBox,
}: {
  axialPosition: number;
  length?: number;
  orientation: Orientation;
  radialPosition: number;
  viewBox: ViewBox;
}): React.ReactElement {
  const positions =
    orientation === Orientation.Horizontal
      ? { height: 20, width: length, x: axialPosition, y: radialPosition - 10 }
      : {
          height: length,
          width: 20,
          x: viewBox.x - radialPosition - 10,
          y: axialPosition,
        };
  return (
    <rect
      height={positions.height}
      rx={10}
      ry={10}
      x={positions.x}
      y={positions.y}
      width={positions.width}
      fill="orange"
    />
  );
}

export default Fretboard;
