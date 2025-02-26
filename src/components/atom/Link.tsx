import BaseLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import cn from '@/utils/cn';

interface CustomLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

function Link({ className, children, ...props }: CustomLinkProps) {
  return (
    <BaseLink
      {...props}
      className={cn(
        'hover:underline hover:hover:opacity-80 underline-offset-4',
        className
      )}
    >
      {children}
    </BaseLink>
  );
}
export default Link;
