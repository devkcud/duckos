/* eslint-disable no-param-reassign */
export function filterItems(list: any[]) {
  const seenItems = new Set();

  return list.filter((el) => {
    const duplicate = seenItems.has(el.windowId);
    seenItems.add(el.windowId);
    return !duplicate;
  });
}

export function setOpacity(app: HTMLElement, opacity: number) {
  app!.style.opacity = `${opacity / 100}`;
  app!.style.filter = `alpha(opacity=${opacity})`;
}

export function fadeOut(app: HTMLElement, opacity: number, out?: () => void) {
  setOpacity(app, opacity);
  if (opacity === 1) {
    app!.style.display = 'none';
    if (out) out();
  }
}

export function fadeIn(app: HTMLElement, opacity: number, out?: () => void) {
  setOpacity(app, opacity);
  if (opacity === 1) {
    app!.style.display = 'block';
    if (out) out();
  }
}

export const onClickEvent = (id: string) => {
  const app = document.getElementById(id);

  if (app!.style.display === '') app!.style.display = 'none';

  const speed = 1.25;

  if (app!.style.display === 'none') {
    for (let i = 1; i <= 100; i += 1) setTimeout(() => fadeIn(app!, 0 + i), i * speed);
  } else if (app!.style.display === 'block') {
    for (let i = 1; i <= 100; i += 1) setTimeout(() => fadeOut(app!, 100 - i), i * speed);
  }
};
