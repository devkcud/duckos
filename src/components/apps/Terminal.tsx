import WindowSample from '../WindowSample';

import '../../styles/Terminal.scss';
import { fadeIn, fadeOut, onClickEvent } from '../../utils/Utils';

let lastCommand: string = '';

export default function Terminal() {
  const id: string = 'terminal.dk';

  const commands = [
    {
      name: 'help',
      about: 'Shows up this menu;',
    },
    {
      name: 'echo [args]',
      about: 'Prints a text in the terminal;',
    },
    {
      name: 'clear',
      about: 'Clears the screen;',
    },
    {
      name: 'about',
      about: 'Shows up who created this website;',
    },
    {
      name: 'exit',
      about: 'Exit.',
    },
  ];

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

                  li.style.display = 'none';

                  if (li.style.display === '') li.style.display = 'none';

                  const speed = 1.25;

                  if (li.style.display === 'none')
                    for (let i = 1; i <= 100; i += 1)
                      setTimeout(
                        () => fadeIn(li, 0 + i, () => span.scrollIntoView({ behavior: 'smooth' })),
                        i * speed,
                      );
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

                switch (cmd.toLowerCase()) {
                  case 'echo': {
                    if (args.length === 0) break;

                    log(cmd, args, args.join(' '), false);

                    break;
                  }

                  case 'clear': {
                    Array.from(scn.getElementsByTagName('li')).forEach((element: any) => {
                      const speed = 1.25;

                      if (element.style.display !== 'none')
                        for (let i = 1; i <= 100; i += 1)
                          setTimeout(
                            () => fadeOut(element, 100 - i, () => scn.removeChild(element)),
                            i * speed,
                          );
                    });
                    break;
                  }

                  case 'help': {
                    let helpTxt = '';

                    commands.forEach((c) => {
                      helpTxt += `<b>${c.name}</b><br />- ${c.about}<br /><br />`;
                    });

                    const txt = `
<h1 style="text-align: center;">Help menu</h1>
<br />
${helpTxt}
`;
                    log(cmd, [], txt, true);
                    break;
                  }

                  case 'about': {
                    log(
                      cmd,
                      [],
                      'André Luis (devkcud) is a brazilian front-end & back-end developer. Enjoys writing in JavaScript/NodeJS, TypeScript, Python & Java.',
                      false,
                    );
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
              }}
            />
          </div>
        </>
      }
    />
  );
}
