/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../styles/Desktop.scss';
import WindowSample from './WindowSample';

function Desktop() {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div id="desktop" style={{ height: 'calc(100vh - 75px)' }}>
      <div className="bg-image" />

      <WindowSample
        id="greeter.app"
        title="Greeter"
        gotoTaskbar
        icon="https://loremflickr.com/320/320/girl"
        defaultX={window.innerWidth / 2 - 300}
        defaultY={200}
        body={
          <>
            <h1 style={{ marginBottom: '8px' }}>Hello world!</h1>
            <p style={{ textAlign: 'justify' }}>
              Hey there! My name is André Luis and I&#39;m a <b>Game</b> and <b>Web Developer</b>{' '}
              from São Paulo, Brazil.
              <br />
              <br />
              This website is my portfolio, it&#39;s basically a <b>Fake Operational System</b>.
            </p>
          </>
        }
      />
    </div>
  );
}

export default Desktop;
