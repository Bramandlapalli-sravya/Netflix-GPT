import './App.css';
import Body from './Components/Body';
import {Provider, useDispatch} from 'react-redux'
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Body/>
    </Provider>
  );
}

export default App;
