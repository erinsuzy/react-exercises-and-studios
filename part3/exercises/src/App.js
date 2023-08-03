
import './App.css';
import HobbyIntroduction from './components/Intodruction';
import MyProjects from './components/Projects';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Geocaching</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
