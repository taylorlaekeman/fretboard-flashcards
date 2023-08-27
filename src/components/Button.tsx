import React, { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode; onClick?: () => void }> = ({
  children,
  onClick = () => {},
}) => {
  return (
    <button onClick={() => onClick()} type="button">
      {children}
    </button>
  );
};

export default Button;
