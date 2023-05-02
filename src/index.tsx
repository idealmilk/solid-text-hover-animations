import Wring from './Wring';
import Rotate from './Rotate';

interface HoverAnimationProps {
  text: string;
  mode?: string;
  stagger?: boolean;
}

const HoverAnimation = ({
  text,
  mode = 'wring',
  stagger = true,
}: HoverAnimationProps) => {
  if (mode === 'wring') {
    return <Wring text={text} stagger={stagger} />;
  } else if (mode === 'rotate') {
    return <Rotate text={text} stagger={stagger} />;
  }
};

export default HoverAnimation;
