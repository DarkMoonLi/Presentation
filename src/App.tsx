import Header from './components/header/header'
import Main from './components/main/main';
import { View } from './components/viewing/viewing';
import store from './store/store';

function App() {
  if (store.getState().viewing.on) {
    return (
      <div>
        <View />
      </div>
    )
  };

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
