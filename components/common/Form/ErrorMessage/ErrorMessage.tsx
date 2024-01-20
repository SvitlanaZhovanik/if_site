import React, { FC } from 'react';

export const ErrorMessage: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <span
      className="absolute -bottom-5 left-0 text-xs text-rose-900"
      role="alert"
    >
      {children}
    </span>
  );
};
