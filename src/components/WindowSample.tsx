/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Draggable from 'react-draggable';
import '../styles/WindowSample.scss';
import { IWindowSample } from '../utils/Interfaces';
import { fadeEvent } from '../utils/Utils';
import { appsList, taskbarAppsList } from './Desktop';

function WindowSample({
  id,
  title,
  icon,
  body,
  hide,
  defaultWidth,
  defaultHeight,
  defaultX,
  defaultY,
  gotoTaskbar,
  onClose,
}: IWindowSample) {
  const defaultStyle = {
    width: defaultWidth,
    height: defaultHeight,
  };

  appsList.push({ windowId: id, tooltip: title, icon });
  if (gotoTaskbar) taskbarAppsList.push({ windowId: id, tooltip: title, icon });

  return (
    // @ts-ignore
    <Draggable
      defaultPosition={{ x: defaultX, y: defaultY }}
      handle="span"
      bounds="#desktop"
      onStart={(e) => {
        e.preventDefault();

        Array.from(document.getElementsByClassName('window-sample')).forEach(
          // @ts-ignore
          // eslint-disable-next-line no-return-assign
          (element) => element !== e.currentTarget && (element.style.zIndex = '1'),
        );

        // @ts-ignore
        if (e.target) e.target.parentElement.style.zIndex = '10';
      }}
    >
      <div
        id={id}
        style={hide ? { ...defaultStyle, display: 'none' } : { ...defaultStyle, display: 'block' }}
        className="window-sample"
      >
        <span className="title-bar" onDoubleClick={() => fadeEvent(document.getElementById(id)!)}>
          {icon && <img src={icon} alt="icon" />}
          <div
            className="close-button"
            onClick={() => {
              fadeEvent(document.getElementById(id)!);
              if (onClose !== undefined) onClose();
            }}
          />
          <p>{title}</p>
        </span>

        <div className="content">{body}</div>
      </div>
    </Draggable>
  );
}

WindowSample.defaultProps = {
  hide: false,
  icon: '',
  defaultWidth: 600,
  defaultHeight: 400,
  defaultX: 70,
  defaultY: 50,
  gotoTaskbar: false,
  onclose: () => {},
};

export default WindowSample;
