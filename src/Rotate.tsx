import { Component, For, createEffect, createSignal } from 'solid-js';

import styles from './Rotate.module.css';

type RotateProps = {
  text: string;
  stagger?: boolean;
};

const Rotate: Component<RotateProps> = (props) => {
  const { text, stagger = true } = props;
  const [isHovered, setIsHovered] = createSignal(false);
  const [isLeaving, setIsLeaving] = createSignal(false);
  const [flipDelay, setFlipDelay] = createSignal(0);

  createEffect(() => {
    if (isLeaving()) {
      setFlipDelay((text.length - 1) * 25);
      setTimeout(() => {
        setIsLeaving(false);
        setFlipDelay(0);
      }, text.length * 35);
    }
  });

  const characters = text.split('');

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsLeaving(true);
        setIsHovered(false);
        setFlipDelay(0); // set flipDelay to 0 when the mouse leaves
      }}
      class={styles.rotateContainer}
    >
      <div class={styles.original}>
        <For each={characters}>
          {(char, i) => (
            <span
              style={{
                transform: isHovered()
                  ? 'translate3d(0, -100%, 0) rotateX(-90deg)'
                  : '',
                transition: stagger
                  ? `transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${
                      isHovered()
                        ? i() * 50
                        : flipDelay() + (text.length - 1 - i()) * 25
                    }ms`
                  : 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 100ms',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )}
        </For>
      </div>

      <div class={styles.clone}>
        <For each={characters}>
          {(char, i) => (
            <span
              style={{
                transform: isHovered()
                  ? 'translate3d(0, 0%, 0) rotateX(0deg)'
                  : 'translate3d(0, 100%, 0) rotateX(-90deg)',
                transition: stagger
                  ? `transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${
                      isHovered()
                        ? i() * 50
                        : flipDelay() + (text.length - 1 - i()) * 25
                    }ms`
                  : 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 100ms',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )}
        </For>
      </div>
    </div>
  );
};

export default Rotate;
