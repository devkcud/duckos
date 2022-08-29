/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Draggable from 'react-draggable';
import '../styles/WindowSample.scss';
import { itemList, taskbarItemList } from './Taskbar';

interface WindowSampleProps {
  id: string;

  title: string;
  body: any;
  icon?: string;

  hide?: boolean;

  defaultWidth?: number;
  defaultHeight?: number;

  defaultX?: number;
  defaultY?: number;

  gotoTaskbar?: boolean;
}

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
}: WindowSampleProps) {
  const defaultStyle = {
    width: defaultWidth,
    height: defaultHeight,
  };

  const onClickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget.parentElement?.parentElement;
    if (target) {
      target.style.display = 'none';
    }
  };

  itemList.push({ windowId: id, tooltip: title, icon });
  if (gotoTaskbar) taskbarItemList.push({ windowId: id, tooltip: title, icon });

  return (
    // @ts-ignore
    <Draggable
      defaultPosition={{ x: defaultX, y: defaultY }}
      handle="span"
      bounds="#desktop"
      onStart={(e) => {
        e.preventDefault();

        Array.from(document.getElementsByClassName('window-sample')).forEach((element) => {
          // @ts-ignore
          if (element !== e.currentTarget) element.style.zIndex = '1';
        });

        if (e.target) {
          // @ts-ignore
          e.target.parentElement.style.zIndex = '10';
        }
      }}
    >
      <div
        id={id}
        style={hide ? { ...defaultStyle, display: 'none' } : { ...defaultStyle, display: 'block' }}
        className="window-sample"
      >
        <span className="title-bar">
          {icon && <img src={icon} alt="icon" />}
          <div className="close-button" onClick={(e) => onClickEvent(e)} />
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
};

export default WindowSample;
