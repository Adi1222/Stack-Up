import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Routes from './routes';

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
