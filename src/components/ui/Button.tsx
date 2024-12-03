import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full px-8 py-3 transition-colors',
        variant === 'primary' &&
          'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
