import React, { FC } from 'react';
import clsx from 'clsx';

type Props = {
  children?: React.ReactNode;
  className?: string;
  labelText?: string;
};

export const Label: FC<Props> = ({ labelText, children, className }) => {
  return (
    <label className={clsx('relative', className)}>
      {labelText && (
        <span className="text-dark group-hover:text-accent">{labelText}</span>
      )}
      {children}
    </label>
  );
};
