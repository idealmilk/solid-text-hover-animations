import Wring from './Wring';

interface HoverAnimationProps {
  text: string;
}

const HoverAnimation = ({ text }: HoverAnimationProps) => {
  return <Wring text={text} />;
};

export default HoverAnimation;
