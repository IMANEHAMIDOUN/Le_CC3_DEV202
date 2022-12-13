import './App.css';
import Acceuil from './components/Acceuil';
import DetailUser from './components/DetailUser';
import ListPosts from './components/ListPosts';
import ListUser from './components/ListUser';
import User from './components/User';
function App() {
  return (
    <div className="App">
     <Acceuil/>
     <DetailUser/>
     <ListPosts/>
     <ListUser/>
     <User/>
    </div>
  );
}

export default App;
