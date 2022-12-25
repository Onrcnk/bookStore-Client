import './App.css';
import Book from './component/Book';
import NavBar from './component/NavBar';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Book />
      </div>
    </Provider>
  );
}

export default App;
