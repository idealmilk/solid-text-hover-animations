import { Component, For, createEffect, createSignal } from 'solid-js';

const Wring: Component<{ text: string }> = (props) => {
  const [text, setText] = createSignal(props.text);
  const [isHovered, setIsHovered] = createSignal(false);
  const [isLeaving, setIsLeaving] = createSignal(false);
  const [flipDelay, setFlipDelay] = createSignal(0);

  createEffect(() => {
    if (isLeaving()) {
      setFlipDelay((text().length - 1) * 25);
      setTimeout(() => {
        setIsLeaving(false);
        setFlipDelay(0);
      }, text.length * 25);
    }
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsLeaving(true);
        setIsHovered(false);
      }}
    >
      <For each={text().split('')}>
        {(char, i) => (
          <span
            style={{
              display: 'inline-block',
              transform: isHovered() ? 'rotateX(360deg)' : '',
              transition: `transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${
                isHovered()
                  ? i() * 50
                  : flipDelay() + (text.length - 1 - i()) * 50
              }ms`,
            }}
          >
            {char}
          </span>
        )}
      </For>
    </div>
  );
};

export default Wring;
