/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsWindow } from 'react-icons/bs';
import { FaBluetooth, FaTh, FaWifi } from 'react-icons/fa';
import { HiVolumeUp } from 'react-icons/hi';
import '../styles/Taskbar.scss';
import { IAppsList } from '../utils/Interfaces';
import { fadeEvent, filterItems } from '../utils/Utils';
import { taskbarAppsList } from './Desktop';

function Taskbar() {
  const date = new Date().toUTCString().split(' ');
  date.pop();
  date.pop();

  return (
    <div className="taskbar">
      <FaTh className="menu-icon" onClick={() => fadeEvent(document.getElementById('applist')!)} />
      <div className="taskbar-items">
        <ul>
          {filterItems(taskbarAppsList).map((item: IAppsList) => (
            <li key={item.windowId}>
              {(item.icon && (
                <img
                  src={item.icon}
                  alt={item.tooltip}
                  onClick={() => fadeEvent(document.getElementById(item.windowId)!)}
                />
              )) || <BsWindow onClick={() => fadeEvent(document.getElementById(item.windowId)!)} />}
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
        <li onClick={() => fadeEvent(document.getElementById('calendar.dk')!)}>
          <p>{date.join(' ')}</p>
        </li>
      </ul>
    </div>
  );
}

export default Taskbar;
