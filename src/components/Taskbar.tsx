/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsWindow } from 'react-icons/bs';
import { FaBluetooth, FaTh, FaWifi } from 'react-icons/fa';
import { HiVolumeUp } from 'react-icons/hi';
import '../styles/Taskbar.scss';
import { filterItems, onClickEvent } from '../utils/Utils';
import { itemsTaskbar } from './Desktop';

function Taskbar() {
  return (
    <div className="taskbar">
      <FaTh className="menu-icon" onClick={() => onClickEvent('applist')} />
      <div className="taskbar-items">
        <ul>
          {filterItems(itemsTaskbar).map((item) => (
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
      <ul className="dock-icons">
        <li>
          <HiVolumeUp />
        </li>
        <li>
          <FaBluetooth />
        </li>
        <li>
          <FaWifi />
        </li>
      </ul>
    </div>
  );
}

export default Taskbar;
