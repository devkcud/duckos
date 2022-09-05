/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../styles/Desktop.scss';
import { IItemList } from '../utils/Interfaces';
import DuckPad from './apps/DuckPad';
import Greeter from './apps/Greeter';

export const itemList: IItemList[] = [];
export const itemsTaskbar: IItemList[] = [];

function Desktop() {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div id="desktop" style={{ height: 'calc(100vh - 75px)' }}>
      <div className="bg-image" />

      <Greeter />
      <DuckPad />
    </div>
  );
}

export default Desktop;
