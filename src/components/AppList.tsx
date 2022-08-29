/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsWindow } from 'react-icons/bs';
import '../styles/AppList.scss';
import { itemList, onClickEvent } from './Taskbar';

export default function AppsList() {
  const seenItems = new Set();

  const filteredItems = itemList.filter((el) => {
    const duplicate = seenItems.has(el.windowId);
    seenItems.add(el.windowId);
    return !duplicate;
  });

  return (
    <div id="applist" className="AppList">
      <h1 style={{ textAlign: 'center' }}>Applications</h1>

      <ul className="Apps">
        {filteredItems.map((item) => (
          <li onClick={() => onClickEvent(item.windowId)}>
            {(item.icon && <img src={item.icon} alt={item.tooltip} />) || <BsWindow />}
            {item.tooltip} ({item.windowId})
          </li>
        ))}
      </ul>
    </div>
  );
}
