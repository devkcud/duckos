import WindowSample from '../WindowSample';

export default function Calendar() {
  return (
    <WindowSample
      id="calendar.dk"
      title="Calendar"
      hide
      defaultX={window.innerWidth - 600}
      defaultY={window.innerHeight - 475}
      body={<h1 style={{ textAlign: 'center' }}>Calendar</h1>}
    />
  );
}
