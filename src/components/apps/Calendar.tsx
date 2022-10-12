import { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import '../../styles/Calendar.scss';
import WindowSample from '../WindowSample';

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <WindowSample
      id="calendar.dk"
      title="Calendar"
      hide
      defaultX={window.innerWidth - 600}
      defaultY={window.innerHeight - 475}
      body={<ReactCalendar onChange={setDate} value={date} />}
    />
  );
}
