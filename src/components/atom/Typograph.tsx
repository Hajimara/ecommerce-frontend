import { ReactNode } from 'react';

import cn from '@/utils/cn';

import IntrinsicElements = React.JSX.IntrinsicElements;

/**
 * ### Style - Text Style Name - Usage
 *
 * **Heading 1** - `text-xxxl/Noto Sans/Regular`
 * - 페이지단위 타이틀 쓰임새로 사용 권장합니다. (예시: 홈 상단 메시지)
 *
 * **Heading 2** - `text-xxl/Noto Sans/Regular`
 * - 페이지단위 타이틀 쓰임새로 사용 권장합니다. (예시: MyG 상단 메시지)
 *
 * **Heading 3** - `text-xl/Noto Sans/Regular`
 * - 템플릿단위 타이틀 쓰임새로 사용 권장합니다. (예시: 홈 템플릿 타이틀)
 *
 * **Heading 4** - `text-l/Noto Sans/Regular`
 * - 템플릿단위 타이틀 쓰임새로 사용 권장합니다. (예시: 헤더 타이틀)
 *
 * **Body 1 (Bold)** - `text-m/Noto Sans KR/Bold`
 * - 주요 본문 쓰임새로 사용 권장합니다. (예시: 서브 타이틀)
 *
 * **Body 1 (Regular)** - `text-m/Noto Sans KR/Regular`
 * - 주요 본문 쓰임새로 사용 권장합니다. (예시: 리스트)
 *
 * **Body 2 (Bold)** - `text-s/Noto Sans KR/Bold`
 * - 보조 본문 강조형 쓰임새로 사용 권장합니다. (예시: 상품명 및 리스트)
 *
 * **Body 2 (Regular)** - `text-s/Noto Sans KR/Regular`
 * - 보조 본문 쓰임새로 사용 권장합니다. (예시: 상품명 및 리스트)
 *
 * **Detail (Bold)** - `text-xs/Noto Sans KR/Bold`
 * - 본문 보조 강조형 쓰임새로 사용 권장합니다. (예시: 인포박스 타이틀)
 *
 * **Detail (Regular)** - `text-xs/Noto Sans KR/Regular`
 * - 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장합니다. (예시: 인포박스)
 */

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1-bold'
  | 'body1'
  | 'body2-bold'
  | 'body2'
  | 'detail-bold'
  | 'detail';

interface TypographyProps {
  as?: keyof IntrinsicElements;
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-xxxl font-regular', // 24px
  h2: 'text-xxl font-regular', // 22px
  h3: 'text-xl font-regular', // 20px
  h4: 'text-l font-regular', // 18px
  'body1-bold': 'text-m font-bold', // 16px Bold
  body1: 'text-m font-regular', // 16px Regular
  'body2-bold': 'text-s font-bold', // 14px Bold
  body2: 'text-s font-regular', // 14px Regular
  'detail-bold': 'text-xs font-bold', // 12px Bold
  detail: 'text-xs font-regular', // 12px Regular
};

function Typography({
  as: Component = 'p',
  variant = 'body1',
  className,
  children,
}: TypographyProps) {
  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}
export default Typography;
