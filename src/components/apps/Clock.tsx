import { useEffect, useState } from 'react';
import '../../styles/Clock.scss';
import WindowSample from '../WindowSample';

export default function ClockApp() {
  const [state, setState] = useState('');

  useEffect(() => {
    setInterval(() => {
      const d = new Date();
      setState(d.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <WindowSample
      id="clock.dk"
      title="Clock"
      hide
      body={
        <div className="body">
          <h1>{state}</h1>
          <p>Displaying local time.</p>
        </div>
      }
    />
  );
}
