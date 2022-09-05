import WindowSample from '../WindowSample';

export default function DuckPad() {
  return (
    <WindowSample
      id="duckpad.dk"
      title="DuckPad"
      icon="https://loremflickr.com/320/320/notes"
      body={<textarea id="duckpad-textarea" />}
      hide
      onClose={() => {
        const textarea = document.getElementById('duckpad-textarea');

        // @ts-ignore
        textarea!.value = '';
      }}
    />
  );
}
