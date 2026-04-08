import Link from 'next/link';

import LogoSvg from '@/components/layout/logo-svg';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  wrapperClassName?: string;
  svgClassName?: string;
}

const Logo = ({ className = '', wrapperClassName = '', svgClassName = '' }: LogoProps) => {
  return (
    <div className={cn('', wrapperClassName)}>
      <Link
        href="/"
        className={cn('relative block', className)}
        aria-label="Power Trip Electrical - Home"
      >
        <LogoSvg className={cn('h-14 w-[240px] lg:h-16 lg:w-[285px]', svgClassName)} />
        <span className="sr-only">Power Trip Electrical</span>
      </Link>
    </div>
  );
};

export default Logo;
