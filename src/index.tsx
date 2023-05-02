import Wring from './Wring';
import Rotate from './Rotate';

interface HoverAnimationProps {
  text: string;
  effect?: string;
  stagger?: boolean;
}

const HoverAnimation = ({
  text,
  effect = 'wring',
  stagger = true,
}: HoverAnimationProps) => {
  if (effect === 'wring') {
    return <Wring text={text} />;
  } else if (effect === 'rotate') {
    return <Rotate text={text} stagger={stagger} />;
  }
};

export default HoverAnimation;
