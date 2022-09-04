/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsWindow } from 'react-icons/bs';
import { FaTh } from 'react-icons/fa';
import '../styles/Taskbar.scss';

interface IItemList {
  icon?: string;
  tooltip: string;
  windowId: string;
}

export const itemList: IItemList[] = [];

const itemsTaskbar: IItemList[] = [];
const items = new Set();

export const taskbarItemList = itemsTaskbar.filter((item) => {
  const duplicate = items.has(item.windowId);
  items.add(item.windowId);
  return !duplicate;
});

export const onClickEvent = (id: string) => {
  const app = document.getElementById(id);

  if (app!.style.display === '') app!.style.display = 'none';

  function setOpacity(opacity: number) {
    app!.style.opacity = `${opacity / 100}`;
    app!.style.filter = `alpha(opacity=${opacity})`;
  }

  function fadeOut(opacity: number) {
    setOpacity(opacity);
    if (opacity === 1) {
      app!.style.display = 'none';
    }
  }

  function fadeIn(opacity: number) {
    setOpacity(opacity);
    if (opacity === 1) {
      app!.style.display = 'block';
    }
  }

  const speed = 1.25;

  if (app!.style.display === 'none') {
    for (let i = 1; i <= 100; i += 1) setTimeout(() => fadeIn(0 + i), i * speed);
  } else if (app!.style.display === 'block') {
    for (let i = 1; i <= 100; i += 1) setTimeout(() => fadeOut(100 - i), i * speed);
  }
};

function Taskbar() {
  const seenItems = new Set();

  const filteredItems = taskbarItemList.filter((el) => {
    const duplicate = seenItems.has(el.windowId);
    seenItems.add(el.windowId);
    return !duplicate;
  });

  return (
    <div className="taskbar">
      <FaTh className="menu-icon" onClick={() => onClickEvent('applist')} />
      <div className="taskbar-items">
        <ul>
          {filteredItems.map((item) => (
            <li>
              {(item.icon && (
                <img
                  src={item.icon}
                  alt={item.tooltip}
                  onClick={() => onClickEvent(item.windowId)}
                />
              )) || <BsWindow onClick={() => onClickEvent(item.windowId)} />}
              <span className="tooltip">
                {item.tooltip} ({item.windowId})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Taskbar;
