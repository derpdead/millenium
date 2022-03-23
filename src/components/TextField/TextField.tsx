import React, { ChangeEvent, FC } from 'react';

import './TextField.scss';
import classNames from 'classnames';

interface ITextFieldProps {
  id: string;
  value: string;
  label: string;
  name: string;
  required: boolean;
  onValueChange: (value: string, name: string) => void;
}

const TextField: FC<ITextFieldProps> = ({
  id,
  value,
  label,
  name,
  required,
  onValueChange,
}) => {
  const classes = classNames(
    'text-field',
    {
      'text-field--required': required,
    },
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(event.currentTarget.value, name || '');
    }
  };

  return (
    <div className={classes}>
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <input autoComplete="off" required={required} type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
