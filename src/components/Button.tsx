import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

export function Button({
  children,
  onClick = () => {},
  shape = Shape.Normal,
  variant = Variant.Normal,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  shape?: Shape;
  variant?: Variant;
}): React.ReactElement {
  return (
    <button
      className={clsx(styles.button, styles[shape], styles[variant])}
      onClick={() => onClick()}
      type="button"
    >
      {children}
    </button>
  );
}

export enum Shape {
  Normal = 'normal',
  Round = 'round',
}

export enum Variant {
  Normal = 'normal',
  Selected = 'selected',
}

export default Button;
