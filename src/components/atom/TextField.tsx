import { InputHTMLAttributes, ReactNode } from 'react';

import cn from '@/utils/cn';

export type TextFieldVariant = 'default' | 'underline' | 'filled' | 'error';

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  variant?: TextFieldVariant;
  suffix?: ReactNode | string;
}

const variantStyles: Record<TextFieldVariant, string> = {
  default: 'border border-gray-300 rounded',
  underline: 'border-b border-gray-300 rounded-none',
  filled: 'bg-gray-100 border border-transparent rounded',
  error: 'border border-red-500 rounded',
};

function TextField({
  className,
  disabled,
  suffix,
  type = 'text',
  variant = 'default',
  ...props
}: TextFieldProps) {
  return (
    <div
      className={cn(
        'relative flex items-center',
        suffix && 'gap-3',
        variantStyles[variant],
        className
      )}
    >
      <input
        {...props}
        type={type}
        className={cn(
          'px-2 py-1 outline-none ring-0 w-full',
          disabled &&
            'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed focus:ring-0 focus:border-gray-300'
        )}
      />
      {suffix}
    </div>
  );
}

export default TextField;
