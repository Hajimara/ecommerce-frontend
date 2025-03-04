import { ReactNode } from 'react';

import cn from '@/utils/cn';
import CloseIcon from '@/assets/CloseIcon';
import Typography from '@/components/atom/Typograph';

interface IChipProps {
  variant?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'gray';
  onClose?: () => void;
  className?: string;
  children: ReactNode;
}

const variantStyles = {
  small: 'text-xs px-2 py-0.5 rounded-xl', // 12px
  medium: 'text-s px-3 py-1 rounded-xl', // 14px
  large: 'text-m px-4 py-1.5 rounded-xl', // 16px
} as const; // ✅ as const 추가 (객체를 리터럴 타입으로 제한)

const colorStyles = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-green-500 text-white',
  gray: 'bg-gray-200 text-gray-700',
} as const; // ✅ as const 추가

function Chip({
  onClose,
  className,
  children,
  variant = 'small',
  color = 'gray',
}: IChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        variantStyles[variant] ?? variantStyles['medium'], // ✅ undefined 방지
        colorStyles[color] ?? colorStyles['gray'], // ✅ undefined 방지
        className
      )}
    >
      <Typography variant="body2">{children}</Typography>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 transition hover:bg-black/10"
        >
          <CloseIcon width={12} height={12} />
        </button>
      )}
    </div>
  );
}

export default Chip;
