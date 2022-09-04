/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsWindow } from 'react-icons/bs';
import { FaTh } from 'react-icons/fa';
import '../styles/Taskbar.scss';
import { IItemList } from '../utils/Interfaces';
import { filterItems, onClickEvent } from '../utils/Utils';

export const itemList: IItemList[] = [];
export const itemsTaskbar: IItemList[] = [];

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
    </div>
  );
}

export default Taskbar;
