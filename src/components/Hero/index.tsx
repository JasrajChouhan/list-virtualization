import { FloatingParticles } from './FloatingParticles';
import { HeroContent } from './HeroContent';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <FloatingParticles />
      <HeroContent onGetStarted={onGetStarted} />
    </div>
  );
}
