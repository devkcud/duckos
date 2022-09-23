import WindowSample from '../WindowSample';

import '../../styles/Terminal.scss';
import { onClickEvent } from '../../utils/Utils';

let lastCommand: string = '';

export default function Terminal() {
  const id: string = 'terminal.dk';

  return (
    <WindowSample
      id={id}
      title="Terminal"
      icon="https://loremflickr.com/1920/1080/computer"
      gotoTaskbar
      body={
        <>
          <ul id="terminal-screen" />
          <div id="command-input">
            <span>user@duckos ~ $</span>
            <input
              type="text"
              id="terminal-input"
              placeholder="help"
              onKeyDown={(e) => {
                const scn: HTMLElement = document.getElementById('terminal-screen')!;
                const input: HTMLElement = document.getElementById('terminal-input')!;

                function log(cmd: string, args: string[], text: string, useInnerHTML: boolean) {
                  const li = document.createElement('li');
                  const span = document.createElement('span');
                  const breakLine = document.createElement('br');
                  const result = document.createElement('span');

                  span.textContent = `user@duckos ~ $ ${cmd} ${args.join(' ')}`;
                  if (!useInnerHTML) result.textContent = text;
                  else result.innerHTML = text;

                  span.classList.add('command-run-item');

                  li.appendChild(span);
                  li.appendChild(breakLine);
                  li.appendChild(result);
                  scn.appendChild(li);
                }

                if (e.key === 'ArrowUp') {
                  // @ts-ignore
                  input.value = lastCommand;
                  return;
                }

                // @ts-ignore
                if (e.key !== 'Enter') return;

                // @ts-ignore
                if (input.value.trim() === '') return;

                // @ts-ignore
                const cmd = input.value.split(' ')[0];
                // @ts-ignore
                const args = input.value.split(' ');
                args.shift();

                // @ts-ignore
                lastCommand = input.value;

                switch (cmd) {
                  case 'echo': {
                    if (args.length === 0) break;

                    log(cmd, args, args.join(' '), false);

                    break;
                  }

                  case 'clear': {
                    Array.from(scn.getElementsByTagName('li')).forEach((element: any) =>
                      scn.removeChild(element),
                    );
                    break;
                  }

                  case 'help': {
                    const txt = `
<h1 style="text-align: center;">Help menu</h1>
<br />
<b>help</b><br />
- Shows up this menu;<br /><br />
<b>echo [args]</b><br />
- Will return a string with the given args;<br /><br />
<b>clear</b><br />
- Clears the screen;
`;
                    log(cmd, [], txt, true);
                    break;
                  }

                  case 'exit': {
                    Array.from(scn.getElementsByTagName('li')).forEach((element: any) =>
                      scn.removeChild(element),
                    );
                    onClickEvent(id);
                    break;
                  }

                  default:
                    log(cmd, args, `${cmd} isn't a valid command.`, false);
                    break;
                }

                // @ts-ignore
                input.value = '';

                Array.from(document.getElementsByClassName('command-run-item'))
                  .at(-1)
                  ?.scrollIntoView();
              }}
            />
          </div>
        </>
      }
    />
  );
}
