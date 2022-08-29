import AppsList from './components/AppList';
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
    </div>
  );
}

export default App;
