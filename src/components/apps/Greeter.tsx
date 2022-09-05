import WindowSample from '../WindowSample';

export default function Greeter() {
  return (
    <WindowSample
      id="greeter.dk"
      title="Greeter"
      gotoTaskbar
      icon="https://loremflickr.com/320/320/girl"
      defaultX={window.innerWidth / 2 - 300}
      defaultY={200}
      body={
        <>
          <h1 style={{ marginBottom: '8px' }}>Hello world!</h1>
          <p style={{ textAlign: 'justify' }}>
            Hey there! My name is André Luis and I&#39;m a <b>Game</b> and <b>Web Developer</b> from
            São Paulo, Brazil.
            <br />
            <br />
            This website is my portfolio, it&#39;s basically a <b>Fake Operational System</b>.
          </p>
        </>
      }
    />
  );
}
