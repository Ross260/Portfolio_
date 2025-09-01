import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'slide-up';
  delay?: number;
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const animationClasses = {
    'fade-up': hasIntersected ? 'animate-fade-up' : 'opacity-0 translate-y-8',
    'fade-left': hasIntersected ? 'animate-fade-left' : 'opacity-0 translate-x-8',
    'fade-right': hasIntersected ? 'animate-fade-right' : 'opacity-0 -translate-x-8',
    'scale-up': hasIntersected ? 'animate-scale-up' : 'opacity-0 scale-95',
    'slide-up': hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-12'
  };

  return (
    <div 
      ref={ref as any}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ParallaxElement = ({ children, speed = 0.5, className = '' }: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  return (
    <div 
      className={`transform transition-transform duration-300 ${className}`}
      style={{
        transform: `translateY(${window.scrollY * speed}px)`
      }}
    >
      {children}
    </div>
  );
};