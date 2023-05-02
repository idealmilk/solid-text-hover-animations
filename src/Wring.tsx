import { Component, For, createEffect, createSignal } from 'solid-js';

import styles from './Wring.module.css';

type WringProps = {
  text: string;
  stagger?: boolean;
};

const Wring: Component<WringProps> = (props) => {
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
        setFlipDelay(0);
      }}
      class={styles.wringContainer}
    >
      <For each={characters}>
        {(char, i) => (
          <span
            style={{
              'transform-style': 'preserve-3d',
              transform: isHovered() ? 'rotateX(360deg)' : '',
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
  );
};

export default Wring;
