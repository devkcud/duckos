/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../styles/Desktop.scss';
import { IAppsList } from '../utils/Interfaces';
import Calendar from './apps/Calendar';
import Clock from './apps/Clock';
import Configurator from './apps/Configurator';
import DuckPad from './apps/DuckPad';
import Greeter from './apps/Greeter';
import Terminal from './apps/Terminal';

export const appsList: IAppsList[] = [];
export const taskbarAppsList: IAppsList[] = [];

function Desktop() {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div id="desktop" style={{ height: 'calc(100vh - 75px)' }}>
      <div className="bg-image" />

      <Greeter />
      <DuckPad />
      <Terminal />
      <Configurator />
      <Calendar />
      <Clock />
    </div>
  );
}

export default Desktop;
