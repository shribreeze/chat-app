import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
     <Route path="/" component = {Homepage} />
     <Route path="/chats" />

    </div>
  );
}

export default App;
