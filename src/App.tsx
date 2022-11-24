import AppsList from './components/AppList';
import ClockApp from './components/apps/Clock';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Desktop />
      <AppsList />
      <Taskbar />
      <ClockApp />
    </div>
  );
}

export default App;
