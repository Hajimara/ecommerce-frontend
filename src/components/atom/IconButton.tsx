import { forwardRef, ButtonHTMLAttributes, ComponentType } from 'react';

import cn from '@/utils/cn';
import { ISvgIconProps } from '@/interface/root';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: 'svg' | 'img';
  className?: string;
  imageUrl?: string;
  imageClassName?: string;
  SvgComponent?: ComponentType<ISvgIconProps>;
  svgProps?: ISvgIconProps;
}

function IconButtonComponent(
  {
    className,
    imageUrl,
    SvgComponent,
    svgProps,
    iconType = 'svg',
    ...props
  }: IIconButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <>
      {iconType === 'svg' && SvgComponent && (
        <button ref={ref} className={cn(className)} {...props}>
          <SvgComponent {...svgProps} />
        </button>
      )}
      {iconType === 'img' && (
        <button ref={ref} className={cn(className)} {...props}>
          <img alt="icon-button" src={imageUrl} />
        </button>
      )}
    </>
  );
}

// ✅ forwardRef로 감싸서 내보내기
const IconButton = forwardRef(IconButtonComponent);

// ✅ displayName 추가 (ESLint 오류 해결)
IconButton.displayName = 'IconButton';

export default IconButton;
