import "./App.css";
import Body from "./Components/Body";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen flex flex-col">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
