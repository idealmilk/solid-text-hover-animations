import Wring from './Wring';
import Rotate from './Rotate';

interface HoverAnimationProps {
  text: string;
  effect?: string;
}

const HoverAnimation = ({ text, effect = 'wring' }: HoverAnimationProps) => {
  if (effect === 'wring') {
    return <Wring text={text} />;
  } else if (effect === 'rotate') {
    return <Rotate text={text} />;
  }
};

export default HoverAnimation;
