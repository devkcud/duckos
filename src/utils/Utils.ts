import { appsList } from '../components/Desktop';
import { IAppsList } from './Interfaces';
/* eslint-disable no-param-reassign */
export function filterItems(list: IAppsList[]): IAppsList[] {
  const seenItems = new Set();

  return list.filter((el) => {
    const duplicate = seenItems.has(el.windowId);
    seenItems.add(el.windowId);
    return !duplicate;
  });
}

export function popOut(element: HTMLElement): void {
  filterItems(appsList).map(
    // eslint-disable-next-line no-return-assign
    (el: IAppsList) => (document.getElementById(el.windowId)!.style.zIndex = '1'),
  );

  element.style.zIndex = '10';
}

export function setOpacity(element: HTMLElement, opacity: number): void {
  element!.style.opacity = `${opacity / 100}`;
  element!.style.filter = `alpha(opacity=${opacity})`;
}

export function fadeOut(element: HTMLElement, opacity: number, out?: () => void): void {
  setOpacity(element, opacity);
  if (opacity === 1) {
    element!.style.display = 'none';
    if (out) out();
  }
}

export function fadeIn(element: HTMLElement, opacity: number, out?: () => void): void {
  setOpacity(element, opacity);
  if (opacity === 1) {
    element!.style.display = 'block';
    popOut(element);
    if (out) out();
  }
}

export function fadeEvent(element: HTMLElement, speed: number = 1.25): void {
  element!.style.display === '' && (element!.style.display = 'none');

  for (let i = 1; i <= 100; i += 1)
    element!.style.display === 'none'
      ? setTimeout(() => fadeIn(element!, 0 + i), i * speed)
      : setTimeout(() => fadeOut(element!, 100 - i), i * speed);
}
