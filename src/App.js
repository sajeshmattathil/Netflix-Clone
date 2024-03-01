
import './App.css';
import NavBar from './Componets/NavBar/NavBar';
import Banner from './Componets/NavBar/Banner/Banner';
import RowPost from './Componets/NavBar/RowPosts\'/RowPost';
import {action,originals} from './url'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={action} title='Action' isSmall />

      </header>
    </div>
  );
}

export default App;
