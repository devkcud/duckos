/* eslint-disable no-param-reassign */
export function filterItems(list: any[]) {
  const seenItems = new Set();

  return list.filter((el) => {
    const duplicate = seenItems.has(el.windowId);
    seenItems.add(el.windowId);
    return !duplicate;
  });
}

export function setOpacity(element: HTMLElement, opacity: number) {
  element!.style.opacity = `${opacity / 100}`;
  element!.style.filter = `alpha(opacity=${opacity})`;
}

export function fadeOut(element: HTMLElement, opacity: number, out?: () => void) {
  setOpacity(element, opacity);
  if (opacity === 1) {
    element!.style.display = 'none';
    if (out) out();
  }
}

export function fadeIn(element: HTMLElement, opacity: number, out?: () => void) {
  setOpacity(element, opacity);
  if (opacity === 1) {
    element!.style.display = 'block';
    if (out) out();
  }
}

export function fadeEvent(element: HTMLElement, speed: number = 1.25) {
  element!.style.display === '' && (element!.style.display = 'none');

  for (let i = 1; i <= 100; i += 1)
    element!.style.display === 'none'
      ? setTimeout(() => fadeIn(element!, 0 + i), i * speed)
      : setTimeout(() => fadeOut(element!, 100 - i), i * speed);
}
