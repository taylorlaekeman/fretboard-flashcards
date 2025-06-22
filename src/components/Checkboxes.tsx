import React from 'react';

import styles from './Checkboxes.module.css';
import textStyles from './Text.module.css';

export function Checkboxes({
  onChange = () => {},
  value = {},
}: {
  onChange?: (input: Record<string, boolean>) => void;
  value?: Record<string, boolean>;
}): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      {Object.entries(value).map(([label, isChecked]) => (
        <Checkbox
          key={label}
          isChecked={isChecked}
          label={label}
          onChange={(newIsChecked) =>
            onChange({
              ...value,
              [label]: newIsChecked,
            })
          }
        />
      ))}
    </div>
  );
}

function Checkbox({
  isChecked = false,
  label = '',
  onChange = () => {},
}: {
  isChecked?: boolean;
  label?: string;
  onChange?: (input: boolean) => void;
}): React.ReactElement {
  return (
    <div className={styles.item}>
      <input
        checked={isChecked}
        id={label}
        name={label}
        onChange={() => onChange(!isChecked)}
        type="checkbox"
      />
      <label className={textStyles.body} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
