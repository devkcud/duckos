/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsWindow } from 'react-icons/bs';
import '../styles/AppList.scss';
import { filterItems, onClickEvent } from '../utils/Utils';
import { itemList } from './Taskbar';

export default function AppsList() {
  return (
    <div id="applist" className="AppList">
      <h1 style={{ textAlign: 'center' }}>Applications</h1>

      <ul className="Apps">
        {filterItems(itemList).map((item) => (
          <li onClick={() => onClickEvent(item.windowId)}>
            {(item.icon && <img src={item.icon} alt={item.tooltip} />) || <BsWindow />}
            {item.tooltip} ({item.windowId})
          </li>
        ))}
      </ul>
    </div>
  );
}
