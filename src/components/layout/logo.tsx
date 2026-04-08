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
        aria-label="PowerFlow Plumbing - Home"
      >
        <LogoSvg className={cn('h-10 w-[162px] lg:h-12 lg:w-[185px]', svgClassName)} />
        <span className="sr-only">PowerFlow Plumbing</span>
      </Link>
    </div>
  );
};

export default Logo;
