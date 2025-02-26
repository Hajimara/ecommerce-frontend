import { HTMLAttributes } from 'react';

import cn from '@/utils/cn';

export type DividerVariant = 'default' | 'bold' | 'dashed' | 'dotted';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  variant?: DividerVariant;
}

const variantStyles: Record<DividerVariant, string> = {
  default: 'border-gray-300',
  bold: 'border-2 border-gray-500',
  dashed: 'border border-dashed border-gray-400',
  dotted: 'border border-dotted border-gray-400',
};

function Divider({
  className,
  direction = 'horizontal',
  variant = 'default',
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex-shrink-0',
        direction === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
        variantStyles[variant],
        className
      )}
    />
  );
}

export default Divider;
