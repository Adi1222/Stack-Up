import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Routes from './routes';
import Header from './components/Header/Header.component'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes/>
      </div>
    </Provider>
  );
};

export default App;
