import WindowSample from '../WindowSample';

import '../../styles/Terminal.scss';
import { fadeEvent, fadeIn, filterItems } from '../../utils/Utils';
import { appsList } from '../Desktop';

let lastCommand: string = '';

export default function Terminal() {
  function log(cmd: string, args: string[], text: string, useInnerHTML: boolean) {
    const section = document.createElement('li');
    const command = document.createElement('span');
    const result = document.createElement('span');

    section.style.display = 'none';

    command.textContent = `user@duckos ~ $ ${cmd} ${args.join(' ')}`;
    !useInnerHTML ? (result.textContent = text) : (result.innerHTML = text);

    command.classList.add('command-run-item');

    section.appendChild(command);
    section.appendChild(document.createElement('br'));
    section.appendChild(result);

    document.getElementById('terminal-screen')?.appendChild(section);

    for (let i = 1; i <= 100; i += 1)
      setTimeout(() => fadeIn(section, 0 + i, () => command.scrollIntoView()), i * 1.1);
    fadeEvent(section, 1.1);
  }

  const PROGRAM_ID: string = 'terminal.dk';

  const commandList: any = {
    help: {
      name: 'help',
      args: [],
      about: 'Shows up this menu;',
    },
    echo: {
      name: 'echo',
      args: ['...*text'],
      about: 'Prints a text in the terminal;',
    },
    clear: {
      name: 'clear',
      args: [],
      about: 'Clears the screen;',
    },
    list: {
      name: 'list',
      args: [],
      about: 'Lists every app.',
    },
    execute: {
      name: 'execute',
      args: ['program'],
      about: 'Forces an app to show up.',
    },
    creator: {
      name: 'creator',
      args: [],
      about: 'Shows up who created this website;',
    },
    exit: {
      name: 'exit',
      args: [],
      about: 'Exit.',
    },
  };

  const helpText = Object.keys(commandList)
    .map((value: string) => {
      const cmd = commandList[value];
      return `<b>${cmd.name}</b> ${cmd.args}<br />--> ${cmd.about}<br /><br />`;
    })
    .join('');

  return (
    <WindowSample
      id={PROGRAM_ID}
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
                const allApps = filterItems(appsList).map((app) => app.windowId);

                const terminalScreen: HTMLElement = document.getElementById('terminal-screen')!;
                const terminalInput: HTMLElement = document.getElementById('terminal-input')!;

                // @ts-ignore
                const terminalInputValue: string = terminalInput.value.trim();

                // @ts-ignore
                e.key === 'ArrowUp' && (terminalInput.value = lastCommand);
                if (e.key !== 'Enter' || terminalInputValue === '') return;

                const commandName = terminalInputValue.split(' ')[0];
                const commandArgs = terminalInputValue.split(' ');
                commandArgs.shift();

                lastCommand = terminalInputValue;

                // Running commands
                switch (commandName.toLowerCase()) {
                  case commandList.echo.name:
                    log(commandName, commandArgs, commandArgs.join(' ') || '', false);
                    break;

                  case commandList.clear.name:
                    terminalScreen.innerHTML = '';
                    break;

                  case commandList.help.name:
                    log(commandName, [], `<h1>Help</h1><br />${helpText}`, true);
                    break;

                  case commandList.list.name:
                    log(commandName, [], allApps.join('<br />'), true);
                    break;

                  case commandList.execute.name: {
                    const app = commandArgs[0];

                    if (!app) break;
                    if (!allApps.includes(app)) break;

                    log(commandName, commandArgs, '', false);
                    fadeEvent(document.getElementById(app)!);
                    break;
                  }

                  case commandList.creator.name:
                    log(commandName, [], 'Andrew is a front/back-end developer.', false);
                    break;

                  case commandList.exit.name:
                    terminalScreen.innerHTML = '';
                    fadeEvent(document.getElementById(PROGRAM_ID)!);
                    break;

                  default:
                    log(commandName, commandArgs, `${commandName} isn't a valid command.`, false);
                    break;
                }

                // @ts-ignore
                terminalInput.value = ''; // Remove command from the input
              }}
            />
          </div>
        </>
      }
    />
  );
}
